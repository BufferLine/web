interface SlideProps {
  children: React.ReactNode;
  className?: string;
}

export default function Slide({ children, className = "" }: SlideProps) {
  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-center p-8 md:p-16 ${className}`}
    >
      {children}
    </div>
  );
}
