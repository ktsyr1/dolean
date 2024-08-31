import { useState, useEffect } from 'react';
import { Header } from '../layoutAdmin';
import axios from "axios";
import Cookies from "js-cookie"
import Spinner from '../../../components/Element/Spinner';

const WaPage = () => {

    const [step, setStep] = useState(1); // لإدارة الخطوات المختلفة في عملية التفعيل
    const [instanceId, setInstanceId] = useState(""); // لتخزين instance_id عند إنشائه
    const [qrCode, setQrCode] = useState(""); // لتخزين بيانات QR code
    let access_token = Cookies.get("access_token")
    let api = `https://taykom.com/api`

    useEffect(() => {
        if (step === 1) createInstance()
        if (step === 2 && instanceId) getQRCode();

    }, [step, instanceId]);

    // دالة لإنشاء Instance جديد
    const createInstance = async () => {
        try {
            const { data } = await axios.get(`${api}/create_instance?access_token=${access_token}`)
            if (data && data.instance_id) {
                setInstanceId(data.instance_id);
                setStep(2); // الانتقال إلى الخطوة التالية
            } else console.error('Failed to create instance:', data);
        } catch (error) {
            console.error('Error creating instance:', error);
        }
    };

    // دالة لجلب QR Code بناءً على instance_id
    const getQRCode = async () => {
        try {
            const { data } = await axios.get(`${api}/get_qrcode?instance_id=${instanceId}&access_token=${access_token}`);
            if (data && data.base64) {
                setQrCode(data.base64);
                setStep(3); // الانتقال إلى الخطوة الأخيرة بعد جلب QR code
            } else console.error('Failed to get QR code:', data);
        } catch (error) {
            console.error('Error getting QR code:', error);
        }
    };

    return (
        <div>
            <Header title={"تفعيل الواتس"} to="/admin" />

            {step === 1 && (
                <div className='flex flex-col justify-center items-center *:py-4'>
                    <Spinner />
                    <h2 className='font-bold'> إنشاء Instance جديد</h2>
                </div>
            )}

            {step === 2 && (
                <div className='flex flex-col justify-center items-center *:py-4'>
                    <Spinner />
                    <h2 className='font-bold'>  جلب QR Code</h2>
                </div>
            )}

            {step === 3 && qrCode && (
                <div className='flex flex-col justify-center items-center *:py-4'>
                    <h2 className='font-bold'> عرض QR Code</h2>
                    <img src={`${qrCode}`} alt="QR Code" />
                    <p>استخدم هذا الـ QR Code لتسجيل الدخول إلى WhatsApp Web</p>
                </div>
            )}
        </div>
    )
};

export default WaPage;
