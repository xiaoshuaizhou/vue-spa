<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">&nbsp;登&nbsp;录</div>
                    <div class="panel-body">
                        <login-form></login-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LoginForm from './LoginForm'
    export default {
        components: {
            LoginForm
        }
    }

</script>