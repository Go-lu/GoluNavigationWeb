<template>
    <el-tooltip class="item" effect="dark" content="点击查看详情" placement="bottom">
        <div class="golu-weather" @click="lookWeatherInfo">
            <span>{{ weatherInfo.temp }} {{ weatherInfo.cityName }} </span><span><img class="weather-icon"
                                                                                      :src="weatherInfo.icon"></span><span> {{
            weatherInfo.category
            }}</span>
        </div>
    </el-tooltip>
</template>

<script>
import {mapState} from "vuex";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Weather",
    data() {
        return {};
    },
    props: ['location', 'adCode'],
    mounted() {
        this.getWeatherInfo();
    },
    methods: {
        /* 获取天气信息 */
        getWeatherInfo() {
            if (this.weatherInfo.isEmpty) {
                const weatherLocation = {
                    location: this.location.longitude + ',' + this.location.latitude,
                    adCode: this.adCode
                };
                // 发送获取数据的请求
                this.$store.dispatch('getWeather', weatherLocation).then().catch(err => {
                    console.log(err)
                });
            }
        },

        /* 调转站点 */
        lookWeatherInfo() {
            if (this.weatherInfo.fxLink)
                window.open(this.weatherInfo.fxLink, "_blank");
        },
    },
    computed: {
        ...mapState({
            weatherInfo: state => state.weather.weatherInfo
        })
    },
};
</script>

<style scoped>

html {
    font-size: 16px;
}

.golu-weather .weather-icon {
    width: 1.5rem;
    vertical-align: text-bottom;
}

.golu-weather {
    text-decoration: none; /* 默认无下划线 */
    transition: text-decoration 0.3s ease; /* 平滑过渡效果 */
}

.golu-weather:hover {
    text-decoration: underline; /* 鼠标悬停时添加下划线 */
}
</style>

