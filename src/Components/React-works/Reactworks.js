import React from 'react';

const Reactworks = () => {
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>রিয়্যাক্ট কিভাবে কাজ করে?</h2>
            <p style={{ padding: '0 140px' }}>React এর অন্যতম গুন হচ্ছে এর Simplicity. এটা কোর জাভাস্ক্রিপ্ট এর পাশাপাশি JSX নামের একটা স্পেশাল সিনটেক্স ব্যাবহার করে যা আমাদেরকে জাভাস্ক্রিপ্ট এর ভিতর শতভাগ HTML লিখার সুবিধা দেয়। এখন ব্রাউজার বিহ্যাইন্ড দ্যা সীনে একটা ডম ট্রি তৈরী করে যাতে ইউজার সেই ডমের সাথে ইন্টার্যাক্ট করতে পারে । তারপরে আমাদের সামনে একটা ওয়েবপেজ প্রদর্শিত হয়। কিন্তু আমরা জানি জাভাস্ক্রিপ্ট ডম ম্যানিপুলেট করতে পারে। তো জাভাস্ক্রিপ্ট দিয়ে রেন্ডার কমপ্লিট হওয়া কোন পেজের ডম ম্যানিপুলেট করলে সেই ওয়েবপেজ আবার পুরোপুরি রেন্ডার হয়(দুই একটা লেটেস্ট ব্রাউজার ছাড়া বাকী বেশীরভাগ ব্রাউজারই পুরোপুরি নতুন করে আবার ডম ট্রি তৈরী করে রেন্ডার করে) যেটা সময় সাপেক্ষ। আর তাই একটা পেজে ডম ম্যানিপুলেট করার মতো ততো বেশী জাভাস্ক্রিপ্ট থাকলে সেই ওয়েবপেজ স্লো হয়ে যাবে। তো এখানেই রিঅ্যাক্ট এর আসল খেলা।</p>
        </div>
    );
};

export default Reactworks;