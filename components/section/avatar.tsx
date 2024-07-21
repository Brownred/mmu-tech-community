import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AvatarDemo({
  srcs,
  className,
  alt,
  fallback,
}: Readonly<{
  srcs: string[];
  className: string;
  alt: string;
  fallback: string;
}>) {
  return (
    <div className={className}>
      {srcs.map((src, index) => {
        return (
          <Avatar key={index}>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
        );
      })}
    </div>
  );
}
