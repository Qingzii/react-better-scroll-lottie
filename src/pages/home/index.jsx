import React, { PureComponent, } from 'react';
import BScroll from 'better-scroll';
import Lottie from 'react-lottie-player'
import lottieJson from '../../assets/json/lottieJson.json'
import './home.scss';
export default class home extends PureComponent {
    state = {
        tabs: ['首页', '赛程', '活动', '资讯', '我的'],
        BS: null,
        play: false,
        y: 0,
    }
    pullingUp = () => {
        console.log(`Up`,)
        this.state.BS.finishPullUp()
    }
    pullingDown = () => {
        console.log(`Down`,)
        this.setState({ play: true })
        let timer = setTimeout(() => {
            this.setState({ play: false })
            this.state.BS.finishPullDown()
            clearTimeout(timer)
        }, 10000);
    }
    scroll = (pos) => {
        if (parseInt(pos.y) > 0) {
            this.setState({ y: pos.y - 45, })
        };
    }
    initBS = () => {
        const body = document.documentElement.clientHeight || document.body.clientHeight
        const warpper = document.getElementsByClassName('warpper')[0]
        const tabBar = document.getElementsByClassName('tabBar')[0]
        warpper.style.height = body - tabBar.clientHeight + 'px'
        const BS = new BScroll(warpper, {
            tap: true,
            click: true,
            scrollY: true,
            probeType: 1,
            pullUpLoad: true,
            pullDownRefresh: {
                threshold: 90,
                stop: 70
            },
        })
        this.setState({ BS })
        BS.on('pullingUp', this.pullingUp)
        BS.on('pullingDown', this.pullingDown)
        BS.on('scroll', this.scroll)
    }
    componentDidMount() {
        this.initBS()
        window.addEventListener('resize', () => {
            this.initBS()
            console.log('test');
        })
    }
    componentWillUnmount() {
        this.setState({ BS: null })
        // window.removeEventListener('resize', null)
    }
    render() {
        const { tabs, y, play } = this.state
        return (
            <div className="home">
                <div className="animation">
                    <Lottie
                        loop={play}
                        play={play}
                        goTo={y}
                        animationData={lottieJson}
                    />
                </div>
                <div className="warpper">
                    <div className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, saepe! Nobis maiores temporibus suscipit illum aliquam, perferendis nisi, obcaecati nesciunt vel laborum rerum, adipisci ullam doloremque? Commodi exercitationem atque obcaecati.
                        Doloribus, voluptates cum. Repellendus illum, delectus, reiciendis asperiores recusandae at eum qui iure assumenda veritatis modi pariatur alias natus. Aut, ipsam quidem ad laudantium eaque a nobis aspernatur illo illum.
                        Laboriosam, molestiae voluptatibus ipsa accusamus suscipit mollitia similique ipsam esse nihil velit architecto praesentium error nostrum? Voluptate veniam natus doloribus minima repudiandae? Quae aspernatur ea voluptatem, dolores aperiam quas magnam.
                        Atque qui officiis maiores rem expedita aut maxime ut dignissimos ex, omnis accusamus! Dolorem aliquid nulla sunt, sed quisquam, vitae ratione voluptas repellendus nihil in adipisci molestiae dolor illum voluptatibus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam alias facilis sunt quaerat, tempore quasi eveniet vero pariatur laboriosam doloribus natus blanditiis assumenda iusto dignissimos voluptate iste, cumque reiciendis!
                        A quia laudantium, beatae velit dolorem qui, corporis facere minus quis asperiores facilis ad nobis voluptatum eligendi perspiciatis soluta fuga reprehenderit fugit voluptate aut veniam sequi voluptas. Necessitatibus, aliquid harum?
                        Ea maxime officiis adipisci, natus consequuntur iste ducimus at ad esse error laboriosam nemo iure veritatis facilis accusamus dolore, sit sapiente dolorem asperiores? Impedit voluptatem omnis libero quam molestias quod?
                        Ab sapiente eum hic nisi et debitis exercitationem ut, recusandae a excepturi iusto, culpa dignissimos? Similique consequatur magni porro modi harum tempore iusto odio, vitae illo voluptas quidem eveniet vero.
                        Molestias quidem possimus iste reiciendis iure consectetur ipsum aut asperiores, earum beatae itaque, illum quaerat dolores tempore, repellat exercitationem quis nisi atque? Veniam magnam recusandae quia nemo magni fugit minima?
                        Ducimus sit enim officiis iusto excepturi est laboriosam ab repudiandae. Eligendi optio est possimus. Illum et illo corporis eum laudantium doloremque facilis labore nesciunt nemo in, ratione aspernatur officia tenetur.
                        Dignissimos architecto officiis, a dolorem quaerat molestiae debitis consectetur animi eos maxime deleniti asperiores itaque ab! Nostrum error sunt excepturi, nihil similique eius quam temporibus earum optio nobis veritatis rem!
                        Illo officiis animi saepe quas rerum totam quia eius itaque, minus quibusdam atque odit dolorem ea. Porro dicta alias in consequatur repudiandae a, quo eaque voluptatibus, similique sapiente voluptatem qui?
                        Accusantium saepe laudantium itaque explicabo rerum reiciendis aliquid sapiente nihil sed ullam officiis, deserunt, amet facere, nam alias recusandae dicta qui culpa quidem repudiandae adipisci laborum fuga. Nobis, optio veritatis?
                        Quidem magnam aspernatur maiores quisquam vero non cum reiciendis eos aliquam quibusdam adipisci numquam nihil temporibus tempora vitae consequatur doloremque, cumque facilis iste eligendi rem repellendus! Minima accusamus adipisci numquam.
                    </div>
                </div>
                <div className="tabBar">
                    {tabs.map((item, i) => {
                        return (
                            <div key={i}>
                                <img src="" alt="" />
                                <span>{item}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
