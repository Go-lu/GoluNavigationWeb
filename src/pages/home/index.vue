<template>
    <div class="all">
        <div class="title2">
            <div class="lan" @click="switch_net('lan_mode')">
                <div
                        v-show="!isChecked"
                        :class="isChecked ? 'animate__backOutRight' : 'animate__flip'"
                        class="lan-off animate__animated"
                >
                    🐬
                </div>
                <div
                        v-show="isChecked"
                        :class="isChecked ? 'animate__bounceInDown' : 'animate__zoomOutDown'"
                        class="lan-on animate__animated"
                >
                    🦈
                </div>
            </div>
            Copyright © 2016-{{new Date().getFullYear()}}
            <a :href="webdata.copyRightLink">{{ webdata.copyRightText }}</a> All
            rights reserved.
        </div>
        <!--      主体-->
        <transition
                :duration="{ enter: 1500, leave: 700 }"
                :enter-active-class="enterAnimate"
                :leave-active-class="`${outAnimate}`"
                appear
                mode="out-in"
                name="animateAll"
                type="animation"
        >
            <!--        v4 -->
            <ul
                    v-if="!v4v6Checked && !isChecked"
                    key="v4"
                    class="switch ul-v4 animate__animated"
            >
                <li>
                    <el-empty v-if="navList === null || navList === undefined || navList.length === 0"
                              description="暂无数据"></el-empty>
                </li>
                <li v-for="(nav, index) in navList" :key="index" class="switch__box">
                    <label>
                        <input name="" type="checkbox"/>
                        <div class="icon-box" @click="js_open(index)">
                            <img :src="nav['image_url']"/>
                            <p>{{ nav["desc"] }}</p>
                            <span v-if="isEdit" class="el-icon-edit" @click="editWeb(index)"
                                  style="color: #85ce61; font-size: 20px; cursor: pointer;"></span>
                            <span style="padding:0 10%;"></span>
                            <span v-if="isEdit" class="el-icon-delete" @click="deleteWeb(index)"
                                  style="color: #d64d5b; font-size: 20px; cursor: pointer;"></span>
                        </div>
                    </label>
                </li>
                <!-- 添加按钮，触发十次开关后开启 -->
                <li class="switch__box" v-if="isEdit">
                    <label>
                        <input name="" type="checkbox"/>
                        <div class="icon-box" @click="openAddWebDataForm('v4')">
                            <p class="el-icon-circle-plus-outline"
                               style="font-size: 20px; height: 40px; line-height: 400%; color: #85ce61;">添加</p>
                        </div>
                    </label>
                </li>
                <!-- 退出编辑按钮 -->
                <li v-if="isEdit">
                    <el-button type="primary" round @click="quitEdit">退出编辑模式</el-button>
                </li>
            </ul>
            <!--        v6 -->
            <ul
                    v-if="v4v6Checked && !isChecked"
                    key="v6"
                    class="switch ul-v6 animate__animated"
            >
                <li>
                    <el-empty v-if="navList === null || navList === undefined || navList.length === 0"
                              description="暂无数据"></el-empty>
                </li>
                <li v-for="(nav, index) in navList" :key="index" class="switch__box">
                    <label>
                        <input name="" type="checkbox"/>
                        <div class="icon-box" @click="js_open(index)">
                            <img :src="nav['image_url']"/>
                            <p>{{ nav["desc"] }}</p>
                            <span v-if="isEdit" class="el-icon-edit" @click="editWeb(index)"
                                  style="color: #85ce61; font-size: 20px; cursor: pointer;"></span>
                            <span style="padding:0 10%;"></span>
                            <span v-if="isEdit" class="el-icon-delete" @click="deleteWeb(index)"
                                  style="color: #d64d5b; font-size: 20px; cursor: pointer;"></span>
                        </div>
                    </label>
                </li>

                <!-- 添加按钮，触发十次开关后开启 -->
                <li class="switch__box" v-if="isEdit">
                    <label>
                        <input name="" type="checkbox"/>
                        <div class="icon-box" @click="openAddWebDataForm('v6')">
                            <p class="el-icon-circle-plus-outline"
                               style="font-size: 20px; height: 40px; line-height: 400%; color: #85ce61;">添加</p>
                        </div>
                    </label>
                </li>
                <!-- 退出编辑按钮 -->
                <li v-if="isEdit">
                    <el-button type="primary" round @click="quitEdit">退出编辑模式</el-button>
                </li>
            </ul>

            <!--        lan 内网ip -->
            <ul v-if="isChecked" key="lan" class="switch ul-lan animate__animated">
                <li>
                    <el-empty v-if="navList === null || navList === undefined || navList.length === 0"
                              description="暂无数据"></el-empty>
                </li>
                <li v-for="(nav, index) in navList" :key="index" class="switch__box">
                    <label>
                        <input name="" type="checkbox"/>
                        <div class="icon-box" @click="js_open(index)">
                            <img :src="nav['image_url']"/>
                            <p>{{ nav["desc"] }}</p>
                            <span v-if="isEdit" class="el-icon-edit" @click="editWeb(index)"
                                  style="color: #85ce61; font-size: 20px;cursor: pointer;"></span>
                            <span style="padding:0 10%;"></span>
                            <span v-if="isEdit" class="el-icon-delete" @click="deleteWeb(index)"
                                  style="color: #d64d5b; font-size: 20px; cursor: pointer;"></span>
                        </div>
                    </label>
                </li>

                <!-- 添加按钮，触发十次开关后开启 -->
                <li class="switch__box" v-if="isEdit">
                    <label>
                        <input name="" type="checkbox"/>
                        <div class="icon-box" @click="openAddWebDataForm('lan')">
                            <p class="el-icon-circle-plus-outline"
                               style="font-size: 20px; height: 40px; line-height: 400%; color: #85ce61;">添加</p>
                        </div>
                    </label>
                </li>
                <!-- 退出编辑按钮 -->
                <li v-if="isEdit">
                    <el-button type="primary" round @click="quitEdit">退出编辑模式</el-button>
                </li>
            </ul>

        </transition>
        <div class="colormode font animate__animated animate__backInRight">
            <input id="changeColor" type="checkbox" @click="editModel"/>
            <span>🌞</span>
            <span>🌙</span>
        </div>
        <!--    切换v4-v6的按钮  -->
        <div
                v-show="!isChecked"
                class="font netmode animate__animated animate__backInLeft"
                @click="switch_net('v4v6_mode')"
        >
            <input v-model="v4v6Checked" type="checkbox"/>
            <span :class="{ v4box: !isChecked }">6️⃣ V6</span>
            <span :class="{ v6box: isChecked }">4️⃣ V4</span>
        </div>
        <!--    </div>-->
        <div
                v-show="isChecked"
                class="lanmode animate__animated animate__zoomIn"
                @click="switch_net('lan_mode')"
        >
            内网
        </div>

        <div class="title">
            <div class="info">
                <transition
                        :duration="{ enter: 2000, leave: 1000 }"
                        enter-active-class="animate__fadeInLeft"
                        leave-active-class="animate__fadeOutRight"
                        appear
                        mode="out-in"
                        name="titleAnimation"
                        type="animation"
                >
                    <div v-if="!isRotate" class="text animate__animated" key="hitoko">{{ hitokotodata }}</div>
                    <div v-if="isRotate" class="weather animate__animated" key="weather">
                        <weather :location="location" :ad-code="adCode"/>
                    </div>
                </transition>
            </div>

        </div>


        <!-- 弹窗 -->
        <el-dialog
                title="站点信息"
                :visible.sync="DialogVisible"
                width="30%"
                height="50%"
                center
                @close="closeDialog"
                :close-on-click-modal=false
                style="text-align: center; overflow: hidden; margin-top: -6vh">
            <!-- 表单 -->
            <el-form :model="navForm">
                <!-- 图标上传 -->
                <el-form-item label="图标(不上传自动获取)">
                    <el-upload
                            class="avatar-uploader"
                            action="/api/upload"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="navForm.image_url" :src="navForm.image_url" class="avatar" alt="">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="站点名称">
                    <el-input v-model="navForm.desc" autocomplete="off" placeholder="xxxNav"></el-input>
                </el-form-item>
                <el-form-item label="站点链接，填入url后点击解析填充按钮自动解析名称和图标">
                    <el-input v-model="navForm.url" autocomplete="off" placeholder="https://www.example.com"></el-input>
                    <el-button @click="parseUrl">解析填充</el-button>
                    <span class="el-icon-loading" v-if="isParseLoading"></span>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="submitWeb(false)">取 消</el-button>
                <el-button type="primary" @click="submitWeb(true)">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import Weather from "@/components/Weather";
import CryptoJS from 'crypto-js';
import "animate.css";
import {updateWebData, addWebData, deleteWebData, getAuth, getIp, getLocationByBaDu} from "@/api";

const salt = 'GoluNavNB6666NMD';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Home",
    data() {
        return {
            webTitle: "",
            isRotate: false,
            webType: 'v4',
            // 触发器
            timer: null,
            //一言触发器
            hitokoTimer: null,
            //  v4-v6复选框
            v4v6Checked: false,
            //  lan复选框checked属性
            isChecked: false,
            //  进入动画列表
            enterAnimatesList: [
                "animate__backInDown",
                "animate__backInLeft",
                "animate__bounceInDown",
                "animate__bounceInUp",
                "animate__fadeInDown",
                "animate__rotateIn",
                "animate__zoomInDown",
                "animate__zoomInLeft",
                "animate__jackInTheBox",
            ],
            //  跳出动画列表
            outAnimatesList: [
                "animate__backOutDown",
                "animate__backOutRight",
                "animate__fadeOutTopRight",
                "animate__flipOutY",
                "animate__rotateOut",
                "animate__hinge",
                "animate__rollOut",
                "animate__zoomOutDown",
                "animate__zoomOutRight",
            ],
            //  随机进入动画
            enterAnimate: "",
            //  随机跳出动画
            outAnimate: "",
            // 触发编辑计数
            clickTileTime: 0,
            // 是否开启编辑模式
            isEdit: false,
            DialogVisible: false, // 修改增加弹窗表达是否显示
            navForm: {
                id: NaN,
                image_url: '',
                url: '',
                desc: '',
                auth: '',
                type: '',
                creat_time: '',
                update_time: ''
            },
            isParseLoading: false,
            location: {
                latitude: '', //纬度
                longitude: '', //经度
            },
            adCode: '', //地区编码
        };
    },
    mounted() {
        this.getWeatherBeforeData(); //获取地理位置信息
        // 启动定时器
        this.startAllTimer();
        // 监听窗口的失焦和定焦
        window.addEventListener("blur", this.pauseTimer);
        window.addEventListener("focus", this.startAllTimer);
    },
    beforeMount() {
        this.get_random_animate();
    },
    beforeDestroy() {
        this.clearTimer();
        window.removeEventListener("blur", this.pauseTimer);
        window.removeEventListener("focus", this.startAllTimer);
    },
    methods: {
        // 启动两个定时器，此方法供mounted调用
        startAllTimer() {
            this.startTimer();
        },

        // 销毁定时器
        pauseTimer() {
            this.clearTimer();
        },

        // 清理定时器
        clearTimer() {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
        },

        // 派发action获取对应列表数据
        get_webdata(type) {
            this.webType = type;
            this.$store
                .dispatch("getData", type)
                .then()
                .catch((err) => {
                    console.log(err);
                });
        },
        // 调转站点
        js_open(index) {
            const navItem = this.navList[index];
            // 非编辑模式下才跳转
            if (!this.isEdit) {
                window.open(navItem.url, "_blank");
            }
        },

        // 打开修改弹窗
        editWeb(index) {
            if (this.isEdit) {
                const navItem = this.navList[index];
                this.navForm = {...navItem};
                // 开启表单弹窗
                this.DialogVisible = true;
            }
        },

        // 提交获更新站点
        submitWeb(tag) {
            if (!tag) {
                this.DialogVisible = false;
                this.$message({
                    type: 'info',
                    message: '已取消修改',
                    center: true
                });
            } else {
                if (this.isEdit) {
                    if (!this.navForm.id) {
                        // 新增站点
                        this.addWeb();
                    } else this.updateWeb(); // 更新站点

                    // 关闭表单，刷新数据
                    this.DialogVisible = false;
                    this.get_webdata(this.webType);
                }
            }

        },

        // 打开新增站点表单
        openAddWebDataForm(type) {
            if (this.isEdit) {
                this.DialogVisible = true
                // 清空表单
                this.navForm = {
                    id: NaN,
                    image_url: '',
                    url: '',
                    desc: '',
                    auth: '',
                    type: type,
                    creat_time: '',
                    update_time: ''
                }
            }
        },

        // 提交站点新增
        addWeb() {
            if (this.isEdit) {
                try {
                    addWebData(this.navForm).then(res => {
                        if (res.code === 1)
                            this.$message({
                                message: '新增成功',
                                type: 'success',
                                center: true
                            });
                        else
                            this.$message({
                                message: '新增失败',
                                type: 'error',
                                center: true
                            });

                        // 关闭表单，刷新数据
                        this.DialogVisible = false;
                        this.get_webdata(this.webType);
                    });
                } catch (e) {
                    // 关闭表单，刷新数据
                    this.DialogVisible = false;
                    this.get_webdata(this.webType);
                    this.$message({
                        message: '新增请求失败！',
                        type: 'error',
                        center: true
                    });
                    console.log(e);
                } finally {
                    // 关闭表单，刷新数据
                    this.DialogVisible = false;
                    this.get_webdata(this.webType);
                }
            }
        },

        // 提交站点修改
        updateWeb() {
            if (this.isEdit) {
                try {
                    updateWebData(this.navForm).then(res => {
                        if (res.code === 1)
                            this.$message({
                                message: '修改成功',
                                type: 'success',
                                center: true
                            })
                        else
                            this.$message({
                                message: '修改失败',
                                type: 'error',
                                center: true
                            })

                        // 关闭表单，刷新数据
                        this.DialogVisible = false;
                        this.get_webdata(this.webType);
                    })
                } catch (e) {
                    // 关闭表单，刷新数据
                    this.DialogVisible = false;
                    this.get_webdata(this.webType);
                    this.$message({
                        message: '修改请求失败！',
                        type: 'error',
                        center: true
                    })
                    console.log(e);
                }
            }
        },

        // 删除站点
        deleteWeb(index) {
            if (this.isEdit) {
                const navItem = this.navList[index];

                this.$confirm('此操作将删除该站点, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true,
                    roundButton: true
                }).then(() => {
                    try {
                        deleteWebData(navItem.id).then(res => {
                            if (res.code === 1)
                                this.$message({
                                    message: '删除成功',
                                    type: 'success',
                                    center: true
                                })
                            else
                                this.$message({
                                    message: '删除失败',
                                    type: 'error',
                                    center: true
                                })

                            // 关闭表单，刷新数据
                            this.DialogVisible = false;
                            this.get_webdata(this.webType);
                        })
                    } catch (e) {
                        // 关闭表单，刷新数据
                        this.DialogVisible = false;
                        this.get_webdata(this.webType);
                        this.$message({
                            message: '删除请求失败！',
                            type: 'error',
                            center: true
                        })
                        console.log(e);
                    }
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        },

        // 解析url
        parseUrl() {
            this.isParseLoading = true;
            this.$store.dispatch("parseUrl", {url: this.navForm.url}).catch(e => {
                this.$message({
                    message: '解析请求失败！',
                    type: 'error',
                    center: true
                });
                console.log(e);
                this.isParseLoading = false;
            })
        },

        //  旋转title
        rotate_title() {
            this.get_hitokoto();
            this.isRotate = !this.isRotate;
        },
        // 定时触发 旋转方法
        startTimer() {
            // 定时翻转标题
            this.timer = setInterval(this.rotate_title, 5000);
        },
        stopTimer() {
            clearInterval(this.timer);
        },
        switch_net(netType) {
            if (netType === "lan_mode") {
                this.isChecked = !this.isChecked;
                if (this.isChecked) {
                    this.get_webdata("lan");
                } else {
                    if (this.v4v6Checked) {
                        this.get_webdata("v6");
                    } else {
                        this.get_webdata("v4");
                    }
                }
            } else if (netType === "v4v6_mode") {
                this.v4v6Checked = !this.v4v6Checked;
                if (this.v4v6Checked) {
                    this.get_webdata("v6");
                } else {
                    this.get_webdata("v4");
                }
            }
            this.get_random_animate();
        },
        //  获取随机动画
        get_random_animate() {
            // 进入动画的随机
            const randomIndexEnter = Math.floor(
                Math.random() * this.enterAnimatesList.length
            );
            this.enterAnimate = this.enterAnimatesList[randomIndexEnter];
            //  跳出动画的随机
            const randomIndexOut = Math.floor(
                Math.random() * this.outAnimatesList.length
            );
            this.outAnimate = this.outAnimatesList[randomIndexOut];
        },
        //  派发action获取一言
        get_hitokoto() {
            this.$store.dispatch("getHitokotoData");
        },

        // 开启编辑模式
        editModel() {
            if (this.clickTileTime < 10) {
                this.clickTileTime++;
                if (this.clickTileTime === 10) {
                    // 置修改模式标志位为true
                    this.$prompt('请输入密码', '身份验证', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        inputPattern: /^[A-Za-z0-9!@#$%^&*()]+$/,
                        inputErrorMessage: '格式有误！仅支持大小写字母、数字、特殊字符',
                        inputType: 'password',
                        center: true,
                        roundButton: true
                    }).then(({ value }) => {
                        const secretPwd = CryptoJS.MD5(value+salt).toString();
                        console.log(secretPwd);
                        console.log(value);
                        getAuth({password: secretPwd}).then(res=>{
                            if (res.msg){
                                this.$message({
                                    message: '验证成功',
                                    type: 'success',
                                    center: true
                                });
                                this.isEdit = true;
                            }else this.$message({
                                message: '验证失败',
                                type: 'error',
                                center: true
                            });
                        })
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '取消输入'
                        });
                    }).finally(() => {
                        this.clickTileTime = 0;
                    });


                }
            }
        },

        // 退出编辑模式
        quitEdit() {
            this.clickTileTime = 0;
            this.isEdit = false;
        },

        // 关闭弹窗后的处理
        closeDialog() {
            this.navForm = {
                name: '',
                url: '',
                imageUrl: ''
            };
        },

        /* 文件上传 */
        handleAvatarSuccess(res, file) {
            // this.imageUrl = URL.createObjectURL(file.raw);
            if (res.success)
                this.navForm.imageUrl = res.path;
            else this.navForm.imageUrl = URL.createObjectURL(file.raw);
            // console.log(res)
        },
        beforeAvatarUpload(file) {
            this.formFile = file;
            const isImage = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/ico';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isImage) {
                this.$message.error('上传图标图片只能是 JPG|Png|Ico 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传图标图片大小不能超过 2MB!');
            }
            return isImage && isLt2M;
        },

        /* 获取地理位置信息 */
        getLocation() {
            if (!this.location.latitude) {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            this.location = {
                                latitude: position.coords.latitude.toFixed(2),
                                longitude: position.coords.longitude.toFixed(2),
                            };
                        },
                        (error) => {
                            console.log(error);
                        },
                        {
                            enableHighAccuracy: true,
                            timeout: 5000,
                            maximumAge: 0,
                        }
                    );
                } else {
                    console.log("浏览器不支持地理位置");
                }
            }
        },

        /* 获取ip地址 */
        async getIpAddr() {
            try {
                const ipInfo = await getIp();
                return ipInfo.ip;
            } catch (err) {
                console.log(err);
            }
        },

        /* 根据ip地址获取地理位置信息,精度较低 */
        async getLocationByIp() {
            const ip = await this.getIpAddr();
            if (ip) {
                const locationInfo = await getLocationByBaDu(ip);
                try {
                    if (locationInfo.code === 1) {
                        this.adCode = locationInfo['msg'].content['address_detail']['adcode'];
                        console.log(this.adCode);
                    } else console.log(locationInfo);
                } catch (e) {
                    console.log(e);
                }
            }
        },

        // 获取天气前置信息
        getWeatherBeforeData(){
            this.getLocation();
            if (!this.location.latitude){
                this.getLocationByIp().then().catch(err => {
                    console.log(err);
                });
            }
        },
    },
    watch: {
        // 监听urlInfo的变化,控制加载动画
        urlInfo: {
            handler() {
                this.isParseLoading = false;
                console.log(this.urlInfo);
                this.navForm.image_url = this.urlInfo.icon;
                this.navForm.desc = this.urlInfo.title;
            },
            deep: true
        }
    },
    computed: {
        ...mapGetters(["navList", "urlInfo"]),
        ...mapState({
            webdata: (state) => state.home.webData,
            hitokotodata: (state) => state.home.Hitokoto,
        }),
    },
    components: {
        Weather,
    },

};
</script>

<style scoped>
.all {
    width: 97vw;
    height: 100vh;
    overflow: hidden;
}

ul {
    overflow-x: hidden;
    overflow-y: auto;
}

ul::-webkit-scrollbar {
    display: none;
}

/* 隐藏点击显示的蓝色盒子 */
*:focus {
    outline: none;
}

/* 隐藏点击显示的蓝色盒子 */
* {
    -webkit-tap-highlight-color: transparent;
    -moz-tap-highlight-color: transparent;
    -ms-tap-highlight-color: transparent;
    tap-highlight-color: transparent;
}

/*.title {*/
/*  !*overflow: hidden;*!*/
/*  !*position: relative;*!*/
/*}*/

html {
    font-size: 16px; /* 根元素字体大小，1rem = 16px */
}

.info {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /*display: flex;*/
    cursor: pointer;
    transition: all 1s;
}

.info .text,
.info .weather {
    line-height: 50px;
    position: relative;
    top: 0;
    /*left: 50%;*/
    text-align: center;
    backface-visibility: hidden;
    /*background-color: #e0e0e0;*/
}

.info .text {
    overflow: hidden;
    /*width: 100%;*/
    white-space: nowrap; /* 防止内容换行 */
    /* transform: translateZ(20px) translateX(-50%); */
    text-overflow: ellipsis; /* 超出部分以省略号显示 */
}

/*切换内网*/
.title2 .lan {
    /*position: relative;*/
    font-size: 30px;
    width: auto;
    margin-bottom: 15px;
    cursor: pointer;
}

/*内网切外网*/
.lanmode {
    font-size: 20px;
    line-height: 30px;
    position: absolute;
    top: 20px;
    left: 40px;
    width: 80px;
    height: 30px;
    margin-bottom: 20px;
    margin-left: 0;
    cursor: pointer;
    text-align: center;
    color: #225780;
    border-radius: 40px;
    background: linear-gradient(90deg, #fef63c, #40ac7f);
    perspective: 200px;
}

.fade-leave-active {
    animation-duration: 0.5s;
}

/* 上传样式 [>>> 深度选择器] */
>>> .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

>>> .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

>>> .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}

>>> .avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
