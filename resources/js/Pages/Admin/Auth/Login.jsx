import { Link, Head } from "@inertiajs/react";

const Login = () => {
    return (
        <>
            <section className="relative flex h-screen items-center justify-center">
                <div className="w-full max-w-4xl rounded-lg border bg-white p-10 shadow-sm">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-10">
                            <h1 className="text-4xl font-bold leading-snug">
                                Login menjelajahi pengalaman penuh kami
                            </h1>
                            <p className="text-xl leading-relaxed">
                                Jika Kamu Belum Punya Akun Kamu Bisa
                                <Link className="block font-semibold text-blue-500">
                                    Daftar Disini
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
