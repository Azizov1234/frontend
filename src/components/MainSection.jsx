export default function HeaderFromHome() {
 return (
        <section class="flex items-center justify-between w-[80%] mx-auto mt-[80px]">

                <div class="flex flex-col gap-6 max-w-[500px] text-white">
                    <h1 class="text-5xl font-bold leading-tight">
                        Transform Your Idea Into Reality with Finsweet
                    </h1>

                    <p class="text-[#9e9e9e]">
                        The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good
                        attitude.
                    </p>

                    <button
                        class="relative h-[70px] w-[210px] bg-[#444CFF] text-white px-6 flex items-center justify-center gap-2 group">
                        <div class="absolute -top-0 -left-0 w-7 h-7">
                            <img src="/images/Shapes.svg" alt="" class="w-full h-full" />
                        </div>

                        <span>Request Quote</span>

                        <img src="/images/Icon (6).png" alt="" class="ml-2" />
                    </button>
                </div>

                <img src="/images/Header Image.png" alt="" />
            </section>
 )
}
