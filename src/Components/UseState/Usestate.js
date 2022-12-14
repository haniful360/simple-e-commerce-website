import React from 'react';
import './UseState.css';

const Usestate = () => {
    return (
        <div className="padding" style={{ marginBottom: '50px' }}>
            <h2 style={{ textAlign: 'center' }}>ইউজস্টেট কিভাবে কাজ করে?</h2>
            <p>ইউজস্টেট হল একটি হুক (ফাংশন) যা আপনাকে কার্যকরী উপাদানগুলিতে স্টেট ভেরিয়েবল থাকতে দেয়। আপনি এই ফাংশনে প্রারম্ভিক অবস্থা পাস করেন এবং এটি বর্তমান অবস্থার মান (প্রাথমিক অবস্থা নয়) এবং এই মান আপডেট করার জন্য অন্য একটি ফাংশন সহ একটি ভেরিয়েবল প্রদান করে।</p>
        </div >
    );
};

export default Usestate;