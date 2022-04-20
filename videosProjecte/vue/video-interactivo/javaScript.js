var noVideo = "NO",
yesVideo= "YES",
refreshVideo = "refresh",
refreshGeneral="refreshGeneral",

videoURL = "http://daw.abp-politecnics.com/daw03/videoInteractivo.mp4",

v1="#t=0,24",
qv1 = "¿Llamada procedente?",

v10="#t=25,32",

v11="#t=33,53",
qv11 = "¿Sistema de aviso especial?",

v111="#t=59,73",

v110="#t=80,128",
qv110 = "¿Procedimiento específico?",

v1101="#t=131,144",

v1100="#t=147,161",
qv1100 = "¿Llamada asociada?",

v11001="#t=164,177",
qv11001 = "¿Ampliar nota común?",

v110010="#t=181,190",

v110011="#t=192,211",
qv110011 = "¿IRE?",

v11000="#t=214,258",

qv11000 = "¿IRE?",
v1100110="#t=261,273",

v1100111="#t=276,299";

var eventVideo = new Vue()

Vue.component("video-section", {
    template: 
    `
    <div class="row">
        <div class="col">
            <div id="containerVideo">
                <backdrop-video></backdrop-video>
                <backdrop-refresh></backdrop-refresh>
                <video @timeupdate="timeUpdateVideo" ref="videoo" id="video" width="1066.2" height="600" controls>
                    <source id="sourceVideo" :src="getSrc" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            src: videoURL,
            timeVideo: v1,
            currentTime: 0,
            tipoVideo: "1"
        }
    },
    computed: {
        getSrc() {
            return this.src + this.timeVideo;
        }
    },
    methods: {
        timeUpdateVideo() {
            switch(this.tipoVideo) {
                case "1":
                    this.show(v1,false,this.tipoVideo)
                    break;
                case "10":
                    this.show(v10,true,this.tipoVideo)
                    break;
                case "11":
                    this.show(v11,false,this.tipoVideo)
                    break;
                case "111":
                    this.show(v111,true,this.tipoVideo)
                    break;
                case "110":
                    this.show(v110,false,this.tipoVideo)
                    break;
                case "1101":
                    this.show(v1101,true,this.tipoVideo)
                    break;
                case "1100":
                    this.show(v1100,false,this.tipoVideo)
                    break;
                case "11001":
                    this.show(v11001,false,this.tipoVideo)
                    break;
                case "11000":
                    this.show(v11000,false,this.tipoVideo)
                    break;
                case "110010":
                    this.show(v110010,true,this.tipoVideo)
                    break;
                case "110011":
                    this.show(v110011,false,this.tipoVideo)
                    break;
                case "1100110":
                    this.show(v1100110,true,this.tipoVideo)
                    break;
                case "1100111":
                    this.show(v1100111,true,this.tipoVideo)
                    break;

            }

        },
        showBackdrop(tipoVideo) {
            this.$refs.videoo.style.display = "none"
            switch(tipoVideo) {
                case "1":
                    eventVideo.$emit("change-backdrop-video",qv1)
                    break;
                case "11":
                    eventVideo.$emit("change-backdrop-video",qv11)
                    break;
                case "110":
                    eventVideo.$emit("change-backdrop-video",qv110)
                    break;
                case "1100":
                    eventVideo.$emit("change-backdrop-video",qv1100)
                    break;
                case "11000":
                    eventVideo.$emit("change-backdrop-video",qv11000)
                    break;
                case "11001":
                    eventVideo.$emit("change-backdrop-video",qv11001)
                    break;
                case "110011":
                    eventVideo.$emit("change-backdrop-video",qv110011)
                    break;
            }

        },
        showBackdropRefresh() {
            this.$refs.videoo.style.display = "none"
            eventVideo.$emit("change-backdrop-refresh","true")
        },
        refresh() {
            this.$refs.videoo.style.display = "block"
            this.$refs.videoo.load()
            this.$refs.videoo.play()
        },
        show(vString,finish,tipoVideo) {
            let time,tInicial,tFinal
            this.currentTime = this.$refs.videoo.currentTime

            time = vString.split("=")
            time = time[1].split(",")
            tInicial = time[0]
            tFinal = time[1]

            if(this.$refs.videoo.currentTime < tInicial) {
                this.$refs.videoo.currentTime = tInicial;
            }
            else if(this.$refs.videoo.currentTime > tFinal) {
                if(finish) {
                    this.showBackdropRefresh()
                }
                else {
                    this.showBackdrop(tipoVideo)
                }

            }
            else if(this.$refs.videoo.onpause == true && this.$refs.videoo.currentTime >= tFinal) {
                if(finish) {
                    this.showBackdropRefresh()
                }
                else {
                    this.showBackdrop(tipoVideo)
                }
            }
        }
    },
    mounted() {
        eventVideo.$on("new-video", optionVideo => {

            if(optionVideo == yesVideo || optionVideo == noVideo) {

                switch(this.tipoVideo) {
                    case "1":
                        if(optionVideo == yesVideo) {
                            this.timeVideo = v11
                            this.tipoVideo = "11"
                            this.refresh()
                        }
                        else {
                            this.timeVideo = v10
                            this.tipoVideo = "10"
                            this.refresh()
                        }

                        break;
                    case "11":
                        if(optionVideo == yesVideo) {
                            this.timeVideo = v111
                            this.tipoVideo = "111"
                            this.refresh()
                        }
                        else {
                            this.timeVideo = v110
                            this.tipoVideo = "110"
                            this.refresh()
                        }
                        break;
                    case "110":
                        if(optionVideo == yesVideo) {
                            this.timeVideo = v1101
                            this.tipoVideo = "1101"
                            this.refresh()
                        }
                        else {
                            this.timeVideo = v1100
                            this.tipoVideo = "1100"
                            this.refresh()
                        }
                        break;
                    case "1100":
                        if(optionVideo == yesVideo) {
                            this.timeVideo = v11001
                            this.tipoVideo = "11001"
                            this.refresh()
                        }
                        else {
                            this.timeVideo = v11000
                            this.tipoVideo = "11000"
                            this.refresh()
                        }
                        break;
                    case "11001":
                        if(optionVideo == yesVideo) {
                            this.timeVideo = v110011
                            this.tipoVideo = "110011"
                            this.refresh()
                        }
                        else {
                            this.timeVideo = v110010
                            this.tipoVideo = "110010"
                            this.refresh()
                        }
                        break;
                    case "110011":
                        if(optionVideo == yesVideo) {
                            // debugger;
                            this.timeVideo = v1100111
                            this.tipoVideo = "1100111"
                            this.refresh()
                        }
                        else {
                            // debugger;
                            this.timeVideo = v1100110
                            this.tipoVideo = "1100110"
                            this.refresh()
                        }
                        break;
                    case "11000":
                        if(optionVideo == yesVideo) {
                            this.timeVideo = v1100111
                            this.tipoVideo = "1100111"
                            this.refresh()
                        }
                        else {
                            this.timeVideo = v1100110
                            this.tipoVideo = "1100110"
                            this.refresh()
                        }
                        break;
                }

            }
            else if(optionVideo == this.$refreshVideo){
                this.refresh()

            }
            else {
                this.timeVideo = v1
                this.tipoVideo = "1"
                this.refresh()
            }


        })

    }
})

Vue.component("backdrop-video", {    
    template: 
    `
        <div class="backdrop" v-bind:style="showBackdrop ? 'display: block;' : 'display: none;'">
            <div class="container-fluid">
                <div class="row">
                    <div class="col d-flex justify-content-center align-items-center" style="height: 150px;">
                        <p id="titleVideo">{{ title }}</p>
                    </div>
                </div>
                <div class="row">

                    <backdrop-video-button answerText="SI"></backdrop-video-button>

                    <backdrop-video-button answerText="NO"></backdrop-video-button>


                </div>
                <div class="row">
                    <backdrop-video-refresh-button v-on:click.native="refreshButton"></backdrop-video-refresh-button>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            showBackdrop: false,
            title: "Broggi"
        }
    },
    methods: {
        yesButton() {
            this.showBackdrop = false
            eventVideo.$emit("new-video",yesVideo)
        },
        noButton() {
            this.showBackdrop = false
            eventVideo.$emit("new-video",noVideo)
        },
        refreshButton() {
            this.showBackdrop = false
            eventVideo.$emit("new-video",refreshVideo)
        }
    },
    mounted() {
        eventVideo.$on("change-backdrop-video", title => {
            this.title = title
            this.showBackdrop = true
        })

        eventVideo.$on("click-button", answerText => {
            if(answerText == "SI") {
                this.yesButton()
            }
            else {
                this.noButton()
            }
        })
    }

})

Vue.component("backdrop-video-button", {
    props: {
        answerText: {
            type: [String],
            require: true
        }
    },
    template: 
    `
    <div class="col col-6 d-flex align-items-center justify-content-center" style="height: 375px;">
        <div class="questions d-flex align-items-center justify-content-center" v-on:click="clickButton">
            <p class="answers">{{answerText}}</p>
        </div>
    </div>
    `,
    methods: {
        clickButton() {
            eventVideo.$emit("click-button",this.answerText)
        }
    }
  
})

Vue.component("backdrop-video-refresh-button", {    
    template: 
    `
    <div class="col col-1 d-flex align-items-center justify-content-center" style="height: 75px;">
        <div id="refreshButton">
            <i class="fa fa-refresh"></i>
        </div>
    </div>
    `
  
})

Vue.component("backdrop-refresh", {    
    template: 
    `
    <div class="backdrop" v-bind:style="showBackdropRefresh ? 'display: block;' : 'display: none;'">
        <div class="container-fluid">
            <div class="row">
                <div class="col d-flex align-items-center justify-content-center" style="height: 600px;">
                    <div v-on:click="refreshButtonGeneral">
                        <i class="fa fa-refresh fa-7x"></i>
                    </div>

                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            showBackdropRefresh: false
        }
    },
    methods: {
        refreshButtonGeneral() {
            this.showBackdropRefresh = false
            eventVideo.$emit("new-video",refreshGeneral)
        }
    },
    mounted() {
        eventVideo.$on("change-backdrop-refresh", valor => {
            this.showBackdropRefresh = valor
        })
    }
  
})

const app = new Vue({
    el: '#app'
});
