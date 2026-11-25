// Markup from the taste-skill kit (public/assets): the dealt split hero, the drawn arrow,
// and the photograph frame. Classes are the kit's; page CSS stays in src/index.css.

export const MAIN_ACTION = { href: "/contact#message", label: "Send Vinh a message" };

// Each photograph in /photos has a full file and an -800 file (resize script); widths as written.
const WIDTHS = {
  frankfurt: [600, 1200], "ice-cream": [800, 1600], pho: [600, 1200], friends: [600, 1200],
  headshot: [800, 1254], wastenot: [800, 1536], nfl: [800, 1536],
};

/** srcSet and sizes for a /photos file, so a phone gets the small one. */
export function responsive(src, sizes = "(max-width: 1023px) 100vw, 50vw") {
  const name = src.replace(/^\/photos\//, "").replace(/\.jpg$/, "");
  const w = WIDTHS[name];
  if (!w) return {};
  return { srcSet: `/photos/${name}-800.jpg ${w[0]}w, ${src} ${w[1]}w`, sizes };
}

export function MArrow() {
  return (
    <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
      <path className="m-arrow__stem" d="M1 6h8" />
      <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
    </svg>
  );
}

export function PrimaryButton({ className = "" }) {
  return (
    <a className={`btn btn--primary ${className}`.trim()} href={MAIN_ACTION.href}>
      {MAIN_ACTION.label}
      <MArrow />
    </a>
  );
}

/** hero-split (layout-v4.md): words on span-5, the photograph on span-6 start-7, one float card. */
export function Hero({ kicker, title, lead, secondary, photo, visual, float }) {
  const external = secondary.href.startsWith("http");
  return (
    <section className="hero hero--split" data-enter aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero-text grid hero__grid">
          <div className="hero__text span-5">
            <p className="hero__kicker">
              <span className="dot" aria-hidden="true"></span>
              {kicker}
            </p>
            <h1 id="hero-h">{title}</h1>
            <p className="hero__lead">{lead}</p>
            <div className="btn-row">
              <PrimaryButton />
              <a
                className="btn btn--secondary"
                href={secondary.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {secondary.label}
              </a>
            </div>
          </div>
          <div className="hero__media span-6 start-7">
            {visual || (
            <img
              src={photo.src}
              {...responsive(photo.src, "(max-width: 1023px) 100vw, 80vw")}
              alt={photo.alt}
              style={photo.pos ? { "--ly-pos": photo.pos } : undefined}
              fetchpriority="high"
              data-source="client"
              data-subject={photo.subject}
            />
            )}
            {float && (
              <div className="ly-float">
                <div className="ly-float__row">
                  <span className="ly-live">{float.label}</span>
                  <span>{float.when}</span>
                </div>
                <div className="ly-float__title">{float.title}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/** A tile of real tool icons (icons.mjs fetched them into /assets/icons). */
export function ToolGrid({ tools, cols = 3 }) {
  return (
    <ul className={`ic-grid ic-grid--mosaic ic-grid--cols-${cols} tool-grid`} role="list">
      {tools.map(([icon, name, meta, cls = ""]) => (
        <li className="ic-cell" key={name}>
          <span className="ic-tile ic-tile--72">
            <img className={`ic ${cls}`.trim()} src={`/assets/icons/${icon}.svg`} alt="" />
          </span>
          <span>
            <span className="ic-cell__name">{name}</span>
            <span className="ic-cell__meta">{meta}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

/** ul.rows: a name with its one line, and a value on the right. */
export function Rows({ items, className = "" }) {
  return (
    <ul className={`rows ${className}`.trim()}>
      {items.map(([name, line, value]) => (
        <li key={name}>
          <span className="rows__name">
            {name}
            {line && <small>{line}</small>}
          </span>
          {value && <span className="rows__value">{value}</span>}
        </li>
      ))}
    </ul>
  );
}

/**
 * The kit's code fragment (assets/ui/code) in a panel, holding a real excerpt from a repository.
 * lines: [lineNumber, html] with the kit's token spans (.k keyword, .f function, .n number, .c comment).
 */
export function CodePanel({ files, chip, lines, mark, note, label, className = "" }) {
  return (
    <div className={`panel code-panel ${className}`.trim()} role="img" aria-label={label}>
          <div className="ui ui-panel ui-code" data-ui="code" aria-hidden="true">
            <div className="ui-code__tabs">
              {files.map(([lang, name], i) => (
                <span className={`ui-code__tab${i === 0 ? " is-on" : ""}`} key={name}>
                  <i className="ui-code__lang">{lang}</i>
                  {name}
                </span>
              ))}
              <span className="ui-spacer"></span>
              <span className="ui-chip ui-chip--plain ui-code__chip" data-code-chip>{chip}</span>
            </div>
            <pre className="ui-code__pre">
              <code>
                {lines.map(([n, html]) => (
                  <span
                    key={n}
                    className={`ui-code__ln${n === mark ? " is-mark" : ""}`}
                    data-n={n}
                    dangerouslySetInnerHTML={{ __html: html + "\n" }}
                  />
                ))}
              </code>
            </pre>
            <div className="ui-code__hint" data-code-hint>
              <span className="ui-dot"></span>
              <span data-code-text>{note}</span>
            </div>
          </div>
    </div>
  );
}

// Real excerpts from github.com/vinhhphvm (content_script.js lines 111-117; the notebook's train/test cell).
export const WASTENOT_CODE = {
  label: "WasteNotPromptNot's applyRules loop, which cuts each wasteful phrase and records why",
  files: [["JS", "content_script.js"]],
  chip: "JavaScript",
  mark: 114,
  note: "Each cut phrase is logged with its reason.",
  lines: [
    [111, '<span class="k">for</span> (<span class="k">const</span> r <span class="k">of</span> RULES) {'],
    [112, '  cleaned = cleaned.<span class="f">replace</span>(r.re, (m) =&gt; {'],
    [113, '    removed += m.length;'],
    [114, '    hits.<span class="f">push</span>({ id: r.id, match: m, explain: r.explain });'],
    [115, '    <span class="k">return</span> r.id === <span class="n">"excess-punct"</span> ? m[<span class="n">0</span>] : <span class="n">" "</span>;'],
    [116, '  });'],
    [117, '}'],
  ],
};

export const NFL_CODE = {
  label: "The NFL TD Predictor notebook: last season's passing stats as features, trained on 2024 and tested on 2025",
  files: [["PY", "nfl_touchdown_predictor.ipynb"]],
  chip: "Python",
  mark: 6,
  note: "Train on the 2024 season, test on 2025.",
  lines: [
    [1, 'features = [<span class="n">\'pass_prev\'</span>, <span class="n">\'yards_gained_prev\'</span>,'],
    [2, '            <span class="n">\'touchdown_prev\'</span>]'],
    [3, 'target = <span class="n">\'touchdown\'</span>'],
    [4, 'model_data = new_qb_df.<span class="f">dropna</span>(subset=features + [target])'],
    [5, '<span class="c"># one season to train, the next to test</span>'],
    [6, 'train = model_data.loc[model_data[<span class="n">\'season\'</span>] == <span class="n">2024</span>]'],
    [7, 'test = model_data.loc[model_data[<span class="n">\'season\'</span>] == <span class="n">2025</span>]'],
  ],
};
