export function AmbientOrbs() {
  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, #1E3A5F 0%, transparent 70%)",
          animation: "float-slow 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-[15%] -left-[8%] w-[500px] h-[500px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #F97316 0%, transparent 70%)",
          animation: "float-slower 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-[40%] -left-[15%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, #1E3A5F 0%, transparent 70%)",
          animation: "float-slow 10s ease-in-out infinite 2s",
        }}
      />
    </div>
  );
}
