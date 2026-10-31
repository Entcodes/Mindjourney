/* 像素渲染器：把字符网格画成方块精灵（Minecraft 风格）
 * 网格中每个字符 = 调色板键；'.' = 透明
 */
(function (global) {
  'use strict';

  function normalize(rows) {
    var cols = 0;
    for (var i = 0; i < rows.length; i++) cols = Math.max(cols, rows[i].length);
    return rows.map(function (r) {
      while (r.length < cols) r += '.';
      return r;
    });
  }

  function shadowGrid(rows, palette, scale) {
    var out = [];
    for (var y = 0; y < rows.length; y++) {
      var row = rows[y];
      for (var x = 0; x < row.length; x++) {
        var ch = row[x];
        if (ch === '.' || ch === ' ') continue;
        var color = palette[ch];
        if (!color) continue;
        out.push(x * scale + 'px ' + y * scale + 'px 0 0 ' + color);
      }
    }
    return out.join(',');
  }

  /**
   * 生成精灵元素
   * @param {string[]} rows 字符网格
   * @param {Object} palette 调色板
   * @param {number} scale 每个像素放大的px
   * @param {Object} extra 额外样式
   */
  function sprite(rows, palette, scale, extra) {
    var g = normalize(rows);
    var el = document.createElement('div');
    el.className = 'px-sprite';
    el.style.width = g[0].length * scale + 'px';
    el.style.height = g.length * scale + 'px';
    var dot = document.createElement('i');
    dot.style.width = scale + 'px';
    dot.style.height = scale + 'px';
    dot.style.boxShadow = shadowGrid(g, palette, scale);
    el.appendChild(dot);
    if (extra) Object.keys(extra).forEach(function (k) { el.style[k] = extra[k]; });
    return el;
  }

  /* ---------- 书本：竖立在书架上的精装书 ---------- */
  var BOOK_ROWS = [
    'ddddddddddddd.',
    'dccppppppppcd.',
    'dccppppppppcd.',
    'dsccppppppccd.',
    'dsccppppppccd.',
    'dccgggggggccd.',
    'dccgggggggccd.',
    'dccppppppppcd.',
    'dccppppppppcd.',
    'dccgggggpggcd.',
    'dccgggggpggcd.',
    'dsccppppppccd.',
    'dsccppppppccd.',
    'dccppppppppcd.',
    'dccppppppppcd.',
    'ddddddddddddd.'
  ];

  /** 生成书本精灵；scheme 决定封面/书脊/烫金颜色 */
  function bookSprite(scale, scheme, openMark) {
    var pal = {
      d: scheme.edge || '#2b1a12',
      c: scheme.cover,
      s: scheme.spine,
      p: scheme.pages || '#f6ead1',
      g: scheme.gold || '#f2c14e'
    };
    var rows = BOOK_ROWS.slice();
    if (openMark) {
      // 已读完：右下角贴一个像素对勾（替换最后两行局部字符）
      rows[12] = 'dsccppppppcdg.';
      rows[13] = 'dccpppppppcgg.';
      rows[14] = 'dccpppppppcdg.';
    }
    var el = sprite(rows, pal, scale, { position: 'relative' });
    el.dataset.book = '1';
    return el;
  }

  /* ---------- 人物：戴帽子的心理学教授 ---------- */
  var HAT_ROWS = [
    '.....hhhhhh.....',
    '....hhhhhhhh....',
    '...hhHHHHHHhh...',
    '...hhrrrrrrhh...',
    '.hhhhhhhhhhhhhh.',
    'hHHHHHHHHHHHHHHh',
    'HBBBBBBBBBBBBBBH',
    '................'
  ];

  var BODY_ROWS = [
    '................',
    '...FFFFFFFFFF...',
    '..FFFFFFFFFFFF..',
    '..FFffffffffFF..',
    '...FfeeFFeefF...',
    '...FffllffllF...',
    '....FfffmmF.....',
    '.....FFFFFF.....',
    '..kkkkkkkkkkkk..',
    '.kbbbbbbbbbbbbk.',
    '.kbbwwwwwwwwbbk.',
    '.kbwwPPPPPPwwbk.',
    '.kbwwP....Pwwbk.',
    '.kbwwPPPPPPwwbk.',
    '.kbbbbbbbbbbbbk.',
    '.kGGbbbbbbbbGGk.',
    'kkGGbbbbbbbbGGkk',
    '.kk..kkkk..kk...'
  ];

  var FACE_ANCHOR = { headRowTop: 1, hair: 'F', skin: 'f' };

  function personSprites(scale, theme) {
    var hatPal = { h: theme.hat, H: theme.hatDark, r: theme.ribbon, B: theme.hatBrim };
    var bodyPal = {
      F: theme.hair, f: theme.skin, e: theme.eye, P: theme.pocketDark, l: theme.blush || '#f0a0b0',
      m: theme.mouth, k: theme.outline, b: theme.dress, w: theme.apron, G: theme.hand
    };
    return {
      hat: sprite(HAT_ROWS, hatPal, scale, { cursor: 'pointer' }),
      body: sprite(BODY_ROWS, bodyPal, scale)
    };
  }

  /* ---------- 信封 ---------- */
  var LETTER_ROWS = [
    'eeeeeeeeeeeeee',
    'ewwwwwwwwwwwwt',
    'ewtttttttttwwt',
    'ewtTTTTTTTTwt.',
    'ewwwwwwwwwwwwt',
    'ewwwwRRRwwwwwt',
    'ewweewwwweewwt',
    'eweeewwweeeewt',
    'eeeeeeeeeeeeee'
  ];

  function letterSprite(scale, theme) {
    var pal = {
      e: theme.letterEdge || '#8a5a3c',
      w: theme.letterPaper || '#fff7e6',
      t: theme.letterShade || '#e6d2b3',
      T: theme.letterText || '#b79a72',
      R: theme.letterWax || '#e0567a'
    };
    return sprite(LETTER_ROWS, pal, scale);
  }

  /* ---------- 像素小图标（星星/心/书签/灯泡） ---------- */
  var ICONS = {
    star: ['......s.......', '.....sss......', '....sssss.....', 'ssssssssssssss', '.ssssssssssss.', '..ssssssssss..', '...sss.sss....', '...s.....s....'],
    heart: ['.hh....hh.', 'hhhhhhhhhh', 'hhhhhhhhhh', 'hhhhhhhhhh', '.hhhhhhhh.', '..hhhhhh..', '...hhhh...', '....hh....'],
    bulb: ['..yyyy..', 'yyyyyyyy', 'yyyyyyyy', 'yyyyyyyy', '.yyyyyy.', '..wwww..', '..wwww..', '...dd...'],
    check: ['..........', '.........g', '.......gg.', '.....gg...', '.gg.......', '..........']
  };

  function icon(name, scale, color) {
    var rows = ICONS[name] || ICONS.star;
    var pal = { w: '#c9c9c9', d: '#6b6b6b' };
    for (var i = 0; i < rows.length; i++) {
      for (var j = 0; j < rows[i].length; j++) {
        var c = rows[i][j];
        if (c !== '.' && !pal[c]) pal[c] = color;
      }
    }
    return sprite(rows, pal, scale);
  }

  global.Pixel = {
    sprite: sprite,
    book: bookSprite,
    person: personSprites,
    letter: letterSprite,
    icon: icon,
    HAT_ROWS: HAT_ROWS,
    BODY_ROWS: BODY_ROWS,
    FACE_ANCHOR: FACE_ANCHOR
  };
})(window);
