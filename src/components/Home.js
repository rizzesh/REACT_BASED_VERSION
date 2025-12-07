import React, { useState } from 'react';
import { Modal } from 'bootstrap';


const Home = ({ setUser }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        plan: ''
    });

    const [alertMessage, setAlertMessage] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone || !formData.plan) {
            setAlertMessage({ type: 'danger', text: 'Please fill out all fields!' });
            return;
        }


        setUser({
            name: formData.name,
            plan: formData.plan,
            phone: formData.phone
        });


        const modalElement = document.getElementById('successModal');
        const successModal = new Modal(modalElement);
        successModal.show();

        setAlertMessage(null);
    };

    return (
        <div>
            {/* Dynamic Alert */}
            {alertMessage && (
                <div className={`alert alert-${alertMessage.type} alert-dismissible fade show fixed-top w-75 mx-auto mt-3 shadow-lg`} style={{ zIndex: 2000 }}>
                    {alertMessage.text}
                    <button type="button" className="btn-close" onClick={() => setAlertMessage(null)}></button>
                </div>
            )}

            {/* Carousel */}
            <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1" className="d-block w-100" style={{ height: "80vh", objectFit: "cover" }} alt="Tiffin" />
                        <div className="carousel-caption d-none d-md-block p-3 rounded">
                            <h2>Delicious Homemade Tiffins</h2>
                            <p>Fresh, healthy and delivered to your doorstep.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" className="d-block w-100" style={{ height: "80vh", objectFit: "cover" }} alt="Healthy" />
                        <div className="carousel-caption d-none d-md-block p-3 rounded">
                            <h2>Healthy Choices</h2>
                            <p>Pick from our vegetarian and vegan options.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
            {/* Registration Form */}
            <section className="py-5 bg-light" id="register">
                <div className="container">
                    <h2 className="text-center mb-4 fw-bold">Join UrbanBite</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card shadow border-0 p-4">
                                <form onSubmit={handleSubmit} className="row g-3">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" className="form-control" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <select className="form-select" name="plan" value={formData.plan} onChange={handleChange}>
                                            <option value="">Select Plan</option>
                                            <option value="Daily">Daily</option>
                                            <option value="Weekly">Weekly</option>
                                            <option value="Monthly">Monthly</option>
                                        </select>
                                    </div>
                                    <div className="col-12 text-center mt-4">
                                        <button type="submit" className="btn btn-success px-5 btn-lg">Register Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Modal */}
            <div className="modal fade" id="successModal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-success">
                        <div className="modal-header bg-success text-white">
                            <h5 className="modal-title">Welcome Aboard! 🎉</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body text-center py-4">

                            <h4>Thank you, {formData.name || 'Foodie'}!</h4>
                            <p className="text-muted">You have selected the <strong>{formData.plan}</strong> plan.</p>
                            <button type="button" className="btn btn-outline-success" data-bs-dismiss="modal">Okay, got it!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;