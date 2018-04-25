<template>
   <div class="star" :class="starType">
       <span v-for="(itemClass,i) in itemClasses" :key="i" :class="itemClass" class="star-item"></span>
       
   </div>
</template>
<script>
    const LENGTH = 5
    const CLS_ON = 'on'
    const CLS_HALF = 'half'
    const CLS_OFF = 'off'

    export default {
        props:['score','size'],
        computed:{
            starType(){
                return 'star-' + this.size;
            },
            itemClasses(){
                let result = [];
                let score = Math.floor(this.score * 2) / 2;
                let hasDecimal = score % 1 !==0;
                let integer = Math.floor(score);
                for (let i = 0;i<integer;i++){
                    result.push(CLS_ON);
                }
                if(hasDecimal){
                    result.push(CLS_HALF)
                }
                while(result.length < LENGTH){
                    result.push(CLS_OFF)
                }
                return result;
            }
        }
    }
</script>

<style scoped lang="less">
    .star{
        font-size: 0.4rem;
        .star-item{
            display: inline-block;
            width:0.3rem;
            height: 0.3rem;
            margin-right:0.1rem;
            &.on{
                background-image: url(./star_on.png);
                background-size:0.3rem 0.3rem;
                background-repeat: no-repeat;
            }
            &.half{
                background-image: url(./star_half.png);
                background-size:0.3rem 0.3rem;
                background-repeat: no-repeat;
            }
            &.off{
                background-image: url(./star_off.png);
                background-size:0.3rem 0.3rem;
                background-repeat: no-repeat;
            }
        }
        &.star-big{
            .star-item{
                display: inline-block;
                width: 0.5rem;
                height: 0.5rem;
                margin-right: 0.1rem;
                &.on{
                    background-image: url(./star_on.png);
                    background-size:0.5rem 0.5rem;
                    background-repeat: no-repeat;
                }
                &.half{
                    background-image: url(./star_half.png);
                    background-size:0.5rem 0.5rem;
                    background-repeat: no-repeat;
                }
                &.off{
                    background-image: url(./star_off.png);
                    background-size:0.5rem 0.5rem;
                    background-repeat: no-repeat;
                }
            }
        }
          &.star-small{
            .star-item{
                display: inline-block;
                width: 0.2rem;
                height: 0.2rem;
                margin-right: 0.1rem;
                &.on{
                    background-image: url(./star_on.png);
                    background-size:0.2rem 0.2rem;
                    background-repeat: no-repeat;
                }
                &.half{
                    background-image: url(./star_half.png);
                    background-size:0.2rem 0.2rem;
                    background-repeat: no-repeat;
                }
                &.off{
                    background-image: url(./star_off.png);
                    background-size:0.2rem 0.2rem;
                    background-repeat: no-repeat;
                }
            }
        }
    }
</style>

