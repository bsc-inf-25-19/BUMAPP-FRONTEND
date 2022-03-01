<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center pt-3">
                <router-link :to="{ name: 'Home' }">
                    <a class="navbar-brand" href="#" style="color:azure">Bumapp</a>
                </router-link>
            </div>
        </div>

        <div class="row">
            <div class="col-12 justify-content-center d-flex flex-row pt-5">
                <div id="signup-div" class="flex-item border">
                    <h2 class="pt-4 pl-4">Create Account</h2>
                    <form @submit="signup" class="pt-4 pl-4 pr-4">
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" class="form-control" v-model="email" required />
                        </div>
                        <div class="form-row">
                            <div class="col">
                                <div class="form-group">
                                    <label>First Name</label>
                                    <input
                                        type="name"
                                        class="form-control"
                                        v-model="firstName"
                                        required
                                    />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label>Last Name</label>
                                    <input
                                        type="name"
                                        class="form-control"
                                        v-model="lastName"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col">
                                <div class="form-group">
                                    <label>Username</label>
                                    <input
                                        type="name"
                                        class="form-control"
                                        v-model="userName"
                                        required
                                    />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label>Phone Number</label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        v-model="phoneNumber"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" v-model="password" required />
                        </div>
                        <div class="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                class="form-control"
                                v-model="passwordConfirm"
                                required
                            />
                        </div>
                        <button type="submit" class="btn btn-primary mt-2 py-0">Create Account</button>
                    </form>
                    <hr />
                    <small
                        class="form-text text-muted pt-2 pl-4 text-center"
                    >Already Have an Account?</small>
                    <p class="text-center">
                        >Signin Here
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
export default {
    name: "Signup",
    props: ["baseURL"],
    data() {
        return {
            email: null,
            firstName: null,
            lastName: null,
            password: null,
            phoneNumber: null,
            userName: null,
            passwordConfirm: null,
        };
    },
    methods: {
        async signup(e) {
            e.preventDefault();
            // if the password matches
            if (this.password === this.passwordConfirm) {
                // make the post body
                const user = {
                    email: this.email,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    password: this.password,
                    phoneNumber: this.phoneNumber,
                    userName: this.userName,
                };

                await axios
                    .post(`${this.baseURL}/users/signup`, user)
                    .then(() => {
                        this.$router.replace("/");
                        swal({
                            text: "User signup successful. Please Login",
                            icon: "success",
                            closeOnClickOutside: false,
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {

                swal({
                    text: "Error! Passwords are not matching",
                    icon: "error",
                    closeOnClickOutside: false,
                });
            }
        },
    },
};
</script>

<style>
</style>