import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {//存放状态（对象），共享属性
        count: 1
    },
    mutations: {//只用来做最后的赋值，改变数据的业务逻辑在action中进行
        increment(state,n) {//n为载荷 是由组件自定义然后提交上来的值
            state.count+=n
        },
        decrement(state){
            state.count--
        }
    },
    actions:{//在state和mutation中间，利用commit调用mutation中的方法，负责实际处理state中的数据
        add(context,n){//action里面也能加载荷
            context.commit('increment',n)
        },
        decrement({commit,state}){//也可以获取state 别忘记大括号
            console.log(state.count)
            commit('decrement')
        }
    },


    getters:{//派生属性，类似计算属性，可以监听state中数据的改变，从而对应进行一些操作
        desc(state){
            if(state.count<50){
                return '吃饭'
            }else {
                return '睡觉'
            }
        }
    }
})
