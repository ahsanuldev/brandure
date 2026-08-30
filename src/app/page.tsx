import Button from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-16 max-w-7xl mx-auto flex flex-col gap-12">
      {/* Header section */}
      <header className="flex flex-col gap-3 text-center md:text-left">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-neutral text-text-primary w-fit border border-stroke">
          Style System Loaded
        </span>
        <h1 className="heading-01 text-text-primary">
          STYLE GUIDE
        </h1>
        <p className="paragraph-large max-w-xl">
          Defines visual rules for product, branding, and web design.
        </p>
      </header>

      {/* Button Preview Section */}
      <section className="flex flex-col gap-6">
        <h2 className="heading-03">Button Component</h2>
        <div className="flex flex-wrap items-center gap-6 p-8 rounded-3xl bg-neutral border border-stroke">
          <Button variant="light">Start a project</Button>
          <Button variant="dark">Start a project</Button>
          <Button variant="primary">Get Started</Button>
          <Button variant="outline">Contact Us</Button>
        </div>
      </section>

      {/* Color Swatches Grid */}
      <section className="flex flex-col gap-6">
        <h2 className="heading-03 text-text-primary">
          Color Palette
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-neutral border border-stroke">
            <div className="h-20 rounded-xl bg-primary"></div>
            <span className="font-semibold text-sm text-text-primary">Primary</span>
            <span className="text-xs text-text-paragraph font-mono">#FF6347</span>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-neutral border border-stroke">
            <div className="h-20 rounded-xl bg-text-primary"></div>
            <span className="font-semibold text-sm text-text-primary">Text Primary</span>
            <span className="text-xs text-text-paragraph font-mono">#161616</span>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-neutral border border-stroke">
            <div className="h-20 rounded-xl bg-text-paragraph"></div>
            <span className="font-semibold text-sm text-text-primary">Paragraph</span>
            <span className="text-xs text-text-paragraph font-mono">#5B5B5B</span>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-neutral border border-stroke">
            <div className="h-20 rounded-xl bg-accent border border-stroke"></div>
            <span className="font-semibold text-sm text-text-primary">Accent</span>
            <span className="text-xs text-text-paragraph font-mono">#FFFFFF</span>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-neutral border border-stroke">
            <div className="h-20 rounded-xl bg-stroke"></div>
            <span className="font-semibold text-sm text-text-primary">Stroke</span>
            <span className="text-xs text-text-paragraph font-mono">#CCC5B6</span>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-neutral border border-stroke">
            <div className="h-20 rounded-xl bg-bg border border-stroke"></div>
            <span className="font-semibold text-sm text-text-primary">Background</span>
            <span className="text-xs text-text-paragraph font-mono">#FAF1DF</span>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-neutral border border-stroke">
            <div className="h-20 rounded-xl bg-neutral border border-stroke"></div>
            <span className="font-semibold text-sm text-text-primary">Neutral</span>
            <span className="text-xs text-text-paragraph font-mono">#E3DBCB</span>
          </div>
        </div>
      </section>

      {/* Typography Showcase */}
      <section className="flex flex-col gap-6">
        <h2 className="heading-03">Typography</h2>

        <div className="flex flex-col gap-6 p-8 rounded-3xl bg-neutral border border-stroke">
          <div className="flex items-baseline justify-between border-b border-stroke pb-3">
            <h1 className="heading-01">HEADING 01</h1>
            <span className="text-xs font-mono text-text-paragraph">64px / Anton / -3% spacing</span>
          </div>

          <div className="flex items-baseline justify-between border-b border-stroke pb-3">
            <h2 className="heading-02">HEADING 02</h2>
            <span className="text-xs font-mono text-text-paragraph">52px / Anton / -3% spacing</span>
          </div>

          <div className="flex items-baseline justify-between border-b border-stroke pb-3">
            <h3 className="heading-03">HEADING 03</h3>
            <span className="text-xs font-mono text-text-paragraph">40px / Anton / -3% spacing</span>
          </div>

          <div className="flex items-baseline justify-between border-b border-stroke pb-3">
            <h4 className="heading-04">HEADING 04</h4>
            <span className="text-xs font-mono text-text-paragraph">32px / Anton / -3% spacing</span>
          </div>

          <div className="flex items-baseline justify-between border-b border-stroke pb-3">
            <h5 className="heading-05">HEADING 05</h5>
            <span className="text-xs font-mono text-text-paragraph">24px / Anton / -3% spacing</span>
          </div>

          <div className="flex items-baseline justify-between border-b border-stroke pb-3">
            <h6 className="heading-06">HEADING 05</h6>
            <span className="text-xs font-mono text-text-paragraph">20px / Anton / -3% spacing</span>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <div className="flex items-center justify-between">
              <p className="paragraph-large">Paragraph Large — 18px body text font size.</p>
              <span className="text-xs font-mono text-text-paragraph">18px / Inter Tight</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="paragraph-medium">Paragraph Medium — 16px default body text font size.</p>
              <span className="text-xs font-mono text-text-paragraph">16px / Inter Tight</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="paragraph-small">Paragraph Small — 14px caption or small print font size.</p>
              <span className="text-xs font-mono text-text-paragraph">14px / Inter Tight</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}




