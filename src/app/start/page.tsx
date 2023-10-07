import { baseGameCards } from './customHooks/useBaseGameCards'

export default function GameStart() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}
            {baseGameCards.map(card => (
                <div key={card.title} className={`max-w-sm rounded overflow-hidden shadow-lg bg-${card.color}-900`}>
                    <div className="px-6 py-2 text-center">
                        <p>{card.procNumber}</p>
                        <div className="font-bold text-xl mb-2">{card.title}</div>
                        <p>{card.icon}</p>
                        <p className="text-gray-700 text-base">
                            {card.description}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span>{card.cost}</span>
                    </div>
                </div>
            ))}
        </main>
    )
}
