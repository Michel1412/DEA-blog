type QuoteDisplayProps = {
  quote: string
  variant: 'centered' | 'border-left'
}

export function QuoteDisplay({ quote, variant }: QuoteDisplayProps) {
  if (variant === 'centered') {
    return (
      <p className="font-serif text-2xl md:text-3xl text-center mt-5 text-[#d4af37]">
        &ldquo;{quote}&rdquo;
      </p>
    )
  }

  return (
    <div className="border-l-4 border-[#d4af37] pl-5 my-5 italic text-[#f0d891]">
      {quote}
    </div>
  )
}
