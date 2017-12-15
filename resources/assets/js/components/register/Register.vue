<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading glyphicon glyphicon-user">&nbsp;注册</div>
                    <div class="panel-body">
                        <register-form></register-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import RegisterForm from './RegisterForm'
    export default {
        components: {
            RegisterForm
        }
    }

</script>