import heroImg from "../assets/hero.png";
export default function Willem() {
    return (
        <>
        <div class="bg-emerald-300 flex items-center justify-center">
            <h1 class="text-red-600">Willem</h1>
            
        </div>
        <div class="max-w-screen">
        <div class="flex flex-row items-center justify-center flex-wrap">   
            <img src={heroImg}/>
            <img src={heroImg}/>
            <img src={heroImg}/>
            <img src={heroImg}/>
            <img src={heroImg}/>
            <img src={heroImg}/>
        </div>
        </div>
        </>
    )
}