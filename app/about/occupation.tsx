import Image from 'next/image';

export default function Occupation() {
  return (
    <div className="mb-8 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-center">
      <div className="text-left">
        <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">Manas Sinha</h1>
        <h2 className="text-sm font-normal md:text-base">Software Developer and Data Scientist</h2>
      </div>
      <div>
        <Image
          alt="Manas Sinha"
          height={130}
          width={130}
          src="/static/images/avatar.webp"
          className="rounded-full object-scale-down grayscale"
        />
      </div>
    </div>
  );
}
