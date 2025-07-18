import Image from 'next/image';

interface Props {
  name: string;
  category: string;
  description: string;
  imageUrl: string;
}

export default function ProductCard({
  name,
  category,
  description,
  imageUrl,
}: Props) {
  return (
    <div className="flex flex-col rounded-2xl">
      <div className="relative mb-[1.2rem] size-[clamp(16.2rem,43.2vw,18.6rem)] overflow-hidden rounded-lg">
        <Image src={imageUrl} alt={name} fill className="object-cover" />
      </div>

      <div className="mb-[1rem] flex items-end gap-[1rem]">
        <h3 className="title2_sb_16 text-white">{name}</h3>
        <p className="caption1_m_11 text-white-70">{category}</p>
      </div>
      <p className="body3_r_12 text-white">{description}</p>
    </div>
  );
}
