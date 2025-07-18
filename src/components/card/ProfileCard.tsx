import Image from 'next/image';

interface Props {
  name: string;
  category: string;
  service?: '앱 서비스' | '웹 서비스';
  logoUrl: string;
}

export default function ProfileCard({
  name,
  category,
  service = '앱 서비스',
  logoUrl,
}: Props) {
  return (
    <div className="flex flex-col rounded-[10px]">
      <div className="relative mb-[1.2rem] size-[clamp(6rem,16vw,6.88rem)] overflow-hidden rounded-lg">
        <Image src={logoUrl} alt={name} fill className="object-cover" />
      </div>
      <h1 className="title2_sb_16 text-ellipsis whitespace-nowrap text-white">
        {name}
      </h1>
      <div className="mt-[0.8rem] flex items-center gap-[0.6rem]">
        <h2 className="body3_r_12">{category}</h2>
        <div className="h-[1.1rem] w-[0.1rem] bg-[#d9d9d9]" />
        <h3 className="body3_r_12 text-white-50">{service}</h3>
      </div>
    </div>
  );
}
