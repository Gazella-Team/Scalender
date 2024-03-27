import Slider from "react-infinite-logo-slider";

const imageData = ["/sliderlogos/Altitude.png", "/sliderlogos/arktik.png", "/sliderlogos/Bizconverts.png", "/sliderlogos/Email Composed.png", "/sliderlogos/Fly.png", "/sliderlogos/forone.webp", "/sliderlogos/gerber.png", "/sliderlogos/Gizeno.png", "/sliderlogos/Vidclia.webp"]

export default function ImageSlider() {
    return (
      <section className="py-4 bg-slate-50 border-b-[1px] h-[10vh] flex items-center overflow-hidden">
        <div>
          <Slider
            width="100px"
            duration={20}
            pauseOnHover={false}
            blurBorders={false}
            blurBoderColor={"#fff"}
          >
            {imageData.map((v) => (
              <Slider.Slide key={v}>
                <img className="w-[70px]" alt={v} src={v}></img>
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </section>
    );
  }