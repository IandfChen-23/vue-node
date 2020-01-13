<template>
    <div>
         <van-button icon="arrow-left" type="default" size="mini" style="position:absolute" @click="goBack"></van-button>
         <div v-html="goods.DETAIL"></div>
    </div>
</template>

<script>
import axios from "../../axios/index";
    export default {
        data() {
            return {
                goods:{
                    DETAIL:null
                }
            }
        },
        methods: {
            goBack(){
                 this.$router.go(-1)
            },
                        async getData(){
                const id=this.$route.params.goodsId
                await axios.post('./goods/getDetail',{

                   goodsId:id
                }
                ).then(res=>{
                    console.log(res)
                    this.goods=res.data.message
                })
            }
        },
        created() {
            this.getData()
        },
    }
</script>

<style  scoped>

</style>