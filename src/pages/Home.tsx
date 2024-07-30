import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useState, useEffect } from "react";

import BubbleBackground from "../components/patterns/BubbleBackground";

export default function Home() {
    const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  return (
    <div className="text-white uppercase font-bold md:text-[150px] text-[100px]">
      <Parallax pages={10} className="text-center">
        
        <ParallaxLayer id="sky">
          <h2 className="text-white md:mt-[160px] mt-[100px] [text-shadow:_5px_5px_0_rgb(0_0_0_/_100%)]">
            THE DEEP SEA
          </h2>
        </ParallaxLayer>
        
        <ParallaxLayer speed={0.1}>
            <div>
                <img className="md:w-[300px] md:w-[140px] w-[60px]" src="./assets/sun.png" alt="" />
            </div>
        </ParallaxLayer>    
        <ParallaxLayer speed={0.1} sticky={{start: 1, end: 10}}>
            <div className="text-[20px] pt-2 font-thin">
                Kedalaman {scrollY} meter
            </div>
        </ParallaxLayer>  
        <ParallaxLayer speed={0.3} offset={0.5} className="mt-[100px]">
            <div>
                <img className="md:w-[300px] w-[130px]" src="./assets/cloud.png" alt="" />
            </div>
        </ParallaxLayer> 
        <ParallaxLayer speed={0.3} offset={0.3} className="mt-[300px] md:mt-[100px]">
            <div>
                <img className="md:w-[300px] w-[150px] float-end" src="./assets/cloud.png" alt="" />
            </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <div
            id="permukaan"
            className="bg-blue-400 w-full h-[1500px] border-t-2 border-white"
          />
          <BubbleBackground />
        </ParallaxLayer>
        <ParallaxLayer offset={1} className="w-full">
            <div className="pt-[150px] w-[1200px] m-auto flex ">

                <div className="flex gap-5 flex-col h-[200px] w-max">
                    <div className="md:w-[140px] w-[60px]">
                        <img src="./assets/IMG_1909.png" alt="" />
                    </div>
                    <h3 className="text-[16px] normal-case">Beben VCS</h3>
                </div>

                <div className="flex gap-5 md:ml-[200px] mt-[410px] flex-col h-[200px] w-max">
                    <div className="md:w-[140px] w-[60px]">
                        <img src="./assets/IMG_3332.png" alt="" />
                    </div>
                    <h3 className="text-[16px] normal-case">Heheheha</h3>
                </div>

                <div className="flex gap-5 ml-[100px] md:ml-[400px] mt-[110px] flex-col h-[200px] w-max">
                    <div className="md:w-[140px] w-[60px]">
                        <img src="./assets/beben.jpg" alt="" />
                    </div>
                    <h3 className="text-[16px] normal-case">Beben rapih</h3>
                </div>

            </div>


<div className="pt-[150px] w-[1200px] m-auto flex ">

<div className="flex gap-5 ml-[100px] flex-col h-[200px] w-max">
    <div className="md:w-[140px] w-[60px]">
        <img src="./assets/IMG_3373.png" alt="" />
    </div>
    <h3 className="text-[16px] normal-case">Beben makan</h3>
</div>

<div className="flex gap-5 md:ml-[280px] mt-[410px] flex-col h-[200px] w-max">
    <div className="md:w-[140px] w-[60px]">
        <img src="./assets/IMG_3376.png" alt="" />
    </div>
    <h3 className="text-[16px] normal-case">Heheheha</h3>
</div>

<div className="flex gap-5 md:ml-[400px] mt-[100px] md:mt-[10px] flex-col h-[200px] w-max">
    <div className="md:w-[140px] w-[60px]">
        <img src="./assets/wle.jpg" alt="" />
    </div>
    <h3 className="text-[16px] normal-case">Beben wlee</h3>
</div>

</div>

<div className="pt-[150px] w-[1200px] m-auto flex ">

<div className="flex gap-5 ml-[20px] md:ml-[100px] flex-col h-[200px] w-max">
    <div className="md:w-[140px] w-[60px]">
        <img src="./assets/gays.jpg" alt="" />
    </div>
    <h3 className="text-[16px] normal-case">Gays</h3>
</div>

<div className="flex gap-5 md:ml-[280px] mt-[410px] flex-col h-[200px] w-max">
    <div className="md:w-[140px] w-[60px]">
        <img src="./assets/maul gay.jpg" alt="" />
    </div>
    <h3 className="text-[16px] normal-case">Gay</h3>
</div>

<div className="flex gap-5 md:ml-[400px] ml-[140px] mt-[10px] flex-col h-[200px] w-max">
    <div className="md:w-[140px] w-[60px]">
        <img src="./assets/IMG_3463.png" alt="" />
    </div>
    <h3 className="text-[16px] normal-case">Beben geram</h3>
</div>

</div>



<div className="pt-[150px] w-[1200px] m-auto flex ">

<div className="flex gap-5 ml-[100px] flex-col h-[200px] w-max">
    <div className="md:w-[140px] w-[60px]">
        <img src="./assets/nightmare.jpg" alt="" />
    </div>
    <h3 className="text-[16px] normal-case">Nightmare</h3>
</div>

<div className="flex gap-5 md:ml-[280px] mt-[410px] flex-col h-[200px] w-max">
    <div className="md:w-[140px] w-[60px]">
        <img src="./assets/kd.png" alt="" />
    </div>
    <h3 className="text-[16px] normal-case">Gua im fine</h3>
</div>

<div className="flex gap-5 md:ml-[400px] mt-[10px] flex-col h-[200px] w-max">
    <div className="md:w-[140px] w-[60px]">
        <img src="./assets/IMG_3463.png" alt="" />
    </div>
    <h3 className="text-[16px] normal-case">Beben geram</h3>
</div>

</div>



<div className="pt-[150px] w-[1200px] m-auto flex ">

<div className="flex gap-5 ml-[10px] flex-col h-[200px] w-max">
    <div className="md:w-[140px] w-[60px]">
        <img src="./assets/ha.jpg" alt="" />
    </div>
    <h3 className="text-[16px] normal-case">😮</h3>
</div>

<div className="flex gap-5 ml-[10px] md:ml-[280px] mt-[200px] md:mt-[110px] flex-col h-[200px] w-max">
    <div className="md:w-[140px] w-[60px]">
        <img src="./assets/same.jpg" alt="" />
    </div>
    <h3 className="text-[16px] normal-case">Waiting for kertas merah</h3>
</div>

<div className="flex gap-5 md:ml-[400px] mt-[10px] flex-col h-[200px] w-max">
    <div className="md:w-[140px] w-[60px]">
        <img src="./assets/chat.png" alt="" />
    </div>
    <h3 className="text-[16px] normal-case">Maul ange</h3>
</div>

</div>



<div className="pt-[150px] w-[1200px] m-auto flex ">


<div className="flex gap-5 md:ml-[280px] mt-[110px] flex-col h-[200px] w-max">
    <div className="md:w-[140px] w-[60px]">
        <img src="./assets/talipun.png" alt="" />
    </div>
    <h3 className="text-[16px] normal-case">icibos</h3>
</div>

<div className="flex gap-5 ml-[100px] md:ml-[400px] mt-[10px] flex-col h-[200px] w-max">
    <div className="md:w-[140px] w-[60px]">
        <img src="./assets/rio.png" alt="" />
    </div>
    <h3 className="text-[16px] normal-case">Aduhai</h3>
</div>

</div>


<div className="pt-[150px] w-[1200px] m-auto flex ">


<div className="flex gap-5 ml-[100px] md:ml-[280px] mt-[110px] flex-col h-[200px] w-max">
    <div className="md:w-[140px] w-[60px]">
        <img src="./assets/menarik.png" alt="" />
    </div>
    <h3 className="text-[16px] normal-case">Menarik</h3>
</div>

<div className="flex gap-5 ml-[40px] md:ml-[400px] mt-[10px] flex-col h-[200px] w-max">
    <div className="md:w-[140px] w-[60px]">
        <img src="./assets/aly.png" alt="" />
    </div>
    <h3 className="text-[16px] normal-case">Pasrah</h3>
</div>

</div>

<div className="pt-[150px] w-[1200px] m-auto flex ">


<div className="flex gap-5 ml-[280px] mt-[110px] flex-col h-[200px] w-max">
    <div className="md:w-[140px] w-[60px]">
        <img src="./assets/mpls.png" alt="" />
    </div>
    <h3 className="text-[16px] normal-case">mpls</h3>
</div>

<div className="flex gap-5 ml-[400px] mt-[10px] flex-col h-[200px] w-max">
    <div className="md:w-[140px] w-[60px]">
        <img src="./assets/anggas.png" alt="" />
    </div>
    <h3 className="text-[16px] normal-case">iya bg</h3>
</div>

</div>
            
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1.5}>
          <BubbleBackground />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.3}>
          <BubbleBackground />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
