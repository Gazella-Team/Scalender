import Slider from "react-infinite-logo-slider";

const imageData = ["/sliderlogos/1.svg", "/sliderlogos/2.svg", "/sliderlogos/3.svg", "/sliderlogos/4.svg", "/sliderlogos/5.svg", "/sliderlogos/6.svg", "/sliderlogos/7.svg", "/sliderlogos/8.svg", "/sliderlogos/9.svg"]

export default function ImageSlider() {
    return (
      <section className="py-4 bg-whites border-b-[1px] h-[10vh] flex items-center overflow-hidden">
        <div>
          <Slider
            width="170px"
            duration={20}
            pauseOnHover={false}
            blurBorders={false}
            blurBoderColor={"#fff"}
          >
            {imageData.map((v) => (
              <Slider.Slide key={v}>
                <img className="w-[100px]" alt={v} src={v}></img>
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </section>
    );
  }