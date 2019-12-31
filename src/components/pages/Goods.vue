<template>
    <div>
      商品详情
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                goodsId:null
            }
        },
        created() {
             axios.post("http://localhost:3000/goods/getDetail",{
            goodsId: '0032862950ca44d397e58a6fb10a3e38'
          }
        ).then( (response) => {
                console.log(response);
            }).catch( (error) => {
                console.log(error);
            });
        },
    }
</script>

<style scoped>

</style>