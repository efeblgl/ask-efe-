import { memoryItems } from "@/data/content";

export default function MemorySection() {
  return (
    <section className="section shell" id="memory">
      <div className="memory reveal">
        <div className="memory-head">
          <span className="pulse-dot" /> memory.loaded
        </div>
        <div className="memory-grid">
          {memoryItems.map((m) => (
            <div key={m} className="memory-item">{m}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
