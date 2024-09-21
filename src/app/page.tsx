import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3x1">
        <h1 className ='text-10x9 font-bold tracking-tight text-orange-600 sm:text-6x1 text-orange'>
          MultMix <span className='text-green-700'>- Seu Mercado digital
          </span>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
            Seja Bem Vindo! Aqui você encontra os melhores produtos para todas as áreas da sua casa
          </p>
        </h1>
      </div>
      <div className='flex justify-center w-full'>
        <Link href="/ofertas" legacyBehavior>
          <a>
            <Image
              src="/logo-de-ofertas.jpg" 
              alt="Ofertas"
              width={800}
              height={800}/>
          </a>
        </Link>
      </div>
    </MaxWidthWrapper>
  )
}
