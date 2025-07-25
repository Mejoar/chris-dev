import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/authSlice";
import auth from "../assets/auth.jpg"
import API_BASE_URL from '../config/api'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);

    try {
            const res = await axios.post(`${API_BASE_URL}/api/v1/user/login`, input, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      if (res.data.success) {
        // Debug response
        console.log('🔍 Login Response Debug:');
        console.log('📦 Full response:', res.data);
        console.log('🎯 Token in response:', res.data.token);
        console.log('👤 User in response:', res.data.user);
        
        // Store token if provided by backend (check multiple possible keys)
        const token = res.data.token || res.data.accessToken || res.data.authToken || res.data.jwt;
        
        if (token) {
          localStorage.setItem('token', token);
          console.log('✅ Token stored in localStorage:', token.substring(0, 20) + '...');
          console.log('✅ Token length:', token.length);
        } else {
          console.log('❌ No token in response - backend might be using cookie-based auth');
          console.log('🔍 Available response keys:', Object.keys(res.data));
        }
        
        navigate('/')
        dispatch(setUser(res.data.user))
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error.response.data.message);

    }

  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex items-center h-screen md:pt-14 md:h-[760px] ">
      <div className="hidden md:block">
        <img src={auth} alt="" className='h-[700px]' />
      </div>
      <div className='flex justify-center items-center flex-1 px-4 md:px-0'>
      <Card className="w-full max-w-md p-6 shadow-lg rounded-2xl dark:bg-gray-800 dark:border-gray-600">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold">Login into your account</CardTitle>
          <p className='text-gray-600 dark:text-gray-300 mt-2 text-sm font-serif text-center'>Enter your details below to login your account</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label>Email</Label>
              <Input type="email"
                placeholder="Email Address"
                name="email"
                value={input.email}
                onChange={handleChange}
                className="dark:border-gray-600 dark:bg-gray-900"
              />
            </div>

            <div className="relative">
              <Label>Password</Label>
              <Input type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                name="password"
                value={input.password}
                onChange={handleChange}
                className="dark:border-gray-600 dark:bg-gray-900"
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <Button type="submit" className="w-full">Login</Button>
            <p className='text-center text-gray-600 dark:text-gray-300'>Don't have an account? <Link to={'/signup'}><span className='underline cursor-pointer hover:text-gray-800'>Sign up</span></Link></p>
          </form>
        </CardContent>
      </Card>
      </div>
    </div>
  )
}

export default Login
