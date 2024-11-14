import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-24">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Privacy Policy</h1>
            
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Introduction</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We take your privacy seriously. This policy describes what personal information we collect
                        and how we use it.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Information We Collect</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        We collect information that you provide directly to us, including but not limited to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Name and contact information</li>
                        <li>Account credentials</li>
                        <li>Payment information</li>
                        <li>Communication preferences</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
