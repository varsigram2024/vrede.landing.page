type PhoneMockProps = {
  title: string;
  subtitle: string;
  accent?: string;
};

export function PhoneMock({ title, subtitle, accent = "#750015" }: PhoneMockProps) {
  return (
    <div className="relative h-[540px] w-[280px] rounded-[2rem] bg-stone-950 p-2 shadow-2xl shadow-stone-900/30">
      <div className="h-full rounded-[1.75rem] bg-white p-4">
        <div className="mb-4 flex items-center justify-between text-[10px] font-medium text-stone-400">
          <span>9:41</span>
          <span>•••</span>
        </div>
        <div className="rounded-3xl bg-stone-100 p-4">
          <div className="mb-3 flex items-center gap-3">
            <div className="size-10 rounded-2xl" style={{ backgroundColor: accent }} />
            <div>
              <p className="text-sm font-semibold text-stone-950">{title}</p>
              <p className="text-xs text-stone-500">{subtitle}</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-10 rounded-2xl bg-white" />
            <div className="h-24 rounded-2xl bg-white" />
            <div className="h-16 rounded-2xl bg-white" />
          </div>
        </div>
        <div className="mt-4 space-y-3">
          <div className="h-4 w-3/4 rounded-full bg-stone-200" />
          <div className="h-4 w-1/2 rounded-full bg-stone-200" />
          <div className="h-4 w-2/3 rounded-full bg-stone-200" />
        </div>
      </div>
    </div>
  );
}
