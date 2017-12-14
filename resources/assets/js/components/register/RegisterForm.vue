<template>
    <form class="form-horizontal" method="POST" @submit.prevent="register" action="">
        <div class="form-group">
            <label for="name" class="col-md-4 control-label">用户名：</label>

            <div class="col-md-6">
                <input id="name" type="text" v-model="name" class="form-control" name="name" value="" required
                       autofocus>
                <span class="help-block"> </span>
            </div>
        </div>

        <div class="form-group">
            <label for="email" class="col-md-4 control-label">邮箱：</label>

            <div class="col-md-6">
                <input id="email" type="email" v-model="email" class="form-control" name="email" value="" required>
                <span class="help-block"></span>
            </div>
        </div>

        <div class="form-group">
            <label for="password" class="col-md-4 control-label">密码：</label>

            <div class="col-md-6">
                <input id="password" type="password" v-model="password" class="form-control" name="password" required>

                <span class="help-block"></span>
            </div>
        </div>

        <div class="form-group">
            <label for="password-confirm" class="col-md-4 control-label">确认密码：</label>

            <div class="col-md-6">
                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
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