import Slider from "react-infinite-logo-slider";

const imageData = ["/sliderlogos/meta.png", "/sliderlogos/meta.png", "/sliderlogos/meta.png", "/sliderlogos/meta.png", "/sliderlogos/meta.png", "/sliderlogos/meta.png",]

export default function ImageSlider() {
    return (
      <section>
        <div>
          <Slider
            width="160px"
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