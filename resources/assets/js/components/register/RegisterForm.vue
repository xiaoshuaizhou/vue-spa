<template>
    <form class="form-horizontal" method="POST" @submit.prevent="register" action="">
        <div class="form-group " :class="{'has-error' : errors.has('name')}">
            <label for="name" class="col-md-4 control-label">用户名：</label>

            <div class="col-md-6">
                <input id="name" type="text" v-model="name"
                       data-vv-as="用户名" v-validate data-vv-rules="required|min:4"
                       class="form-control" name="name" value="" required
                       autofocus>
                <span class="help-block" v-show="errors.has('name')">{{errors.first('name')}}</span>
            </div>
        </div>

        <div class="form-group" :class="{'has-error' : errors.has('email')}">
            <label for="email" class="col-md-4 control-label">邮箱：</label>

            <div class="col-md-6">
                <input id="email" type="email"
                       data-vv-as="邮箱" v-validate data-vv-rules="required|email: true"

                       v-model="email" class="form-control" name="email" value="" required>
                <span class="help-block" v-show="errors.has('email')">{{errors.first('email')}}</span>
            </div>
        </div>

        <div class="form-group" :class="{'has-error' : errors.has('password')}">
            <label for="password" class="col-md-4 control-label">密码：</label>

            <div class="col-md-6">
                <input id="password" type="password"
                       data-vv-as="密码" v-validate data-vv-rules="required|min:6"
                       v-model="password" class="form-control" name="password" required>
                <span class="help-block" v-show="errors.has('password')">{{errors.first('password')}}</span>
            </div>
        </div>

        <div class="form-group" :class="{'has-error' : errors.has('password_confirmation')}">
            <label for="password-confirm" class="col-md-4 control-label">确认密码：</label>

            <div class="col-md-6">
                <input id="password-confirm" type="password"
                       data-vv-as="确认密码" v-validate data-vv-rules="required|confirmed:password"
                       class="form-control" name="password_confirmation" required>
                <span class="help-block" v-show="errors.has('password_confirmation')">{{ errors.first('password_confirmation') }}</span>
            </div>
        </div>

        <div class="form-group">
            <div class="col-md-6 col-md-offset-4">
                <button type="submit" class="btn btn-primary btn-block">
                    注册
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        data(){
            return {
                name:'',
                email:'',
                password:''
            }
        },
        methods: {
            register() {
                let formData = {
                        name: this.name,
                        email:this.email,
                        password: this.password
                }
                axios.post('/api/register', formData).then(response => {
                    this.$router.push({ name : 'confirm' })
                    console.log(response.data)
                })
            }
        }
    }

</script>