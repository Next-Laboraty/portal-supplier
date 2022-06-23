import HeroImages from "../../molecule/HeroImages"
import HeroText from "../../molecule/HeroText"
import ButtonPertamaWarnaBiru from "../ButtonPertamaWarnaBiru"
export default function Hero(props) {
    return (
        <div className="bg-yellow-500 w-full">
            <div className="flex md:flex-row flex-col mx-20 mt-10">
                <HeroText title="Marketing Supplier " deskripsi="Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit. 
                 In maximus porta libero, at feugiat quam lobortis at. 
                 Sed ultricies congue ligula, non finibus ex ultricies nec. S
                 ed gravida nulla ligula, vitae sodales ex semper vitae. 
                 Nam elementum euismod orci sollicitudin efficitur. Nam imperdiet posuere neque, in lobortis elit efficitur eu. 
                 Phasellus dapibus augue dui, nec varius justo pellentesque nec. 
                 Aliquam blandit turpis vel leo volutpat rutrum. Vivamus eu tempor nulla. 
                 Cras porttitor, neque nec pharetra semper, dui libero gravida risus, in pellentesque magna odio et felis. 
                 Donec molestie efficitur libero vitae mollis. Quisque leo nibh, semper a feugiat nec, 
                 pretium eget nibh. Nulla finibus, elit quis iaculis mollis, erat libero tempor dui, ac blandit dui sem non augue. 
                 In vulputate metus sed elit pharetra viverra. Morbi vestibulum dolor tempus, suscipit magna nec, tempus tortor. 
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <HeroImages />
            </div>
        </div>
    )
}