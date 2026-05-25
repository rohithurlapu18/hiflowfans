import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './QuoteForm.css';

function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    fanType: 'FRP Cooling Tower Fan',
    diameter: '',
    diameterUnit: 'mm',
    airflow: '',
    airflowUnit: 'CFM',
    staticPressure: '',
    pressureUnit: 'mmWG',
    motorPower: '',
    powerUnit: 'HP',
    qty: '1',
    additionalDetails: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Contact name is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.diameter.trim()) {
      newErrors.diameter = 'Fan diameter is required';
    } else if (isNaN(formData.diameter) || Number(formData.diameter) <= 0) {
      newErrors.diameter = 'Must be a positive number';
    }
    if (!formData.airflow.trim()) {
      newErrors.airflow = 'Airflow quantity is required';
    } else if (isNaN(formData.airflow) || Number(formData.airflow) <= 0) {
      newErrors.airflow = 'Must be a positive number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('Please correct the validation errors on the specifications form.');
      return;
    }

    setIsSubmitting(true);

    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Your quotation request has been logged successfully! Our sales engineers will calculate performance parameters and issue a custom quote within 24 hours.');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        fanType: 'FRP Cooling Tower Fan',
        diameter: '',
        diameterUnit: 'mm',
        airflow: '',
        airflowUnit: 'CFM',
        staticPressure: '',
        pressureUnit: 'mmWG',
        motorPower: '',
        powerUnit: 'HP',
        qty: '1',
        additionalDetails: ''
      });
    }, 1500);
  };

  return (
    <div className="quote-form-card">
      <ToastContainer position="bottom-right" theme="dark" />
      
      <form onSubmit={handleSubmit} noValidate>
        
        <div className="section-title">1. Company & Contact Details</div>
        
        <div className="form-grid split">
          <div className="form-group">
            <label htmlFor="name">Contact Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Robert Smith"
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Steel Industries Ltd."
              className={errors.company ? 'input-error' : ''}
            />
            {errors.company && <span className="error-text">{errors.company}</span>}
          </div>
        </div>

        <div className="form-grid split">
          <div className="form-group">
            <label htmlFor="email">Work Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. rsmith@company.com"
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone / Mobile</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 99999 88888"
              className={errors.phone ? 'input-error' : ''}
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>
        </div>

        <div className="section-title margin-top">2. Fan Technical Specifications</div>

        <div className="form-grid split">
          <div className="form-group">
            <label htmlFor="fanType">Fan Category</label>
            <select
              id="fanType"
              name="fanType"
              value={formData.fanType}
              onChange={handleChange}
            >
              <option value="FRP Cooling Tower Fan">FRP Cooling Tower Fan</option>
              <option value="FRP Axial Flow Fan">FRP Axial Flow Fan</option>
              <option value="Aluminum Alloy Fan">Aluminum Alloy Fan</option>
              <option value="Centrifugal Blower">Centrifugal Blower</option>
              <option value="Custom Impeller Hub">Custom Impeller Hub</option>
              <option value="Cooling Tower Spares">Cooling Tower Spares</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="qty">Order Quantity</label>
            <input
              type="number"
              id="qty"
              name="qty"
              min="1"
              value={formData.qty}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-grid technical">
          <div className="form-group">
            <label htmlFor="diameter">Fan Diameter</label>
            <div className="input-group">
              <input
                type="text"
                id="diameter"
                name="diameter"
                value={formData.diameter}
                onChange={handleChange}
                placeholder="Diameter"
                className={errors.diameter ? 'input-error' : ''}
              />
              <select
                name="diameterUnit"
                value={formData.diameterUnit}
                onChange={handleChange}
                className="select-unit"
              >
                <option value="mm">mm</option>
                <option value="inches">inches</option>
                <option value="feet">feet</option>
              </select>
            </div>
            {errors.diameter && <span className="error-text">{errors.diameter}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="airflow">Required Airflow</label>
            <div className="input-group">
              <input
                type="text"
                id="airflow"
                name="airflow"
                value={formData.airflow}
                onChange={handleChange}
                placeholder="Airflow"
                className={errors.airflow ? 'input-error' : ''}
              />
              <select
                name="airflowUnit"
                value={formData.airflowUnit}
                onChange={handleChange}
                className="select-unit"
              >
                <option value="CFM">CFM</option>
                <option value="m3/h">m³/h</option>
                <option value="m3/s">m³/s</option>
              </select>
            </div>
            {errors.airflow && <span className="error-text">{errors.airflow}</span>}
          </div>
        </div>

        <div className="form-grid technical">
          <div className="form-group">
            <label htmlFor="staticPressure">Static Pressure</label>
            <div className="input-group">
              <input
                type="text"
                id="staticPressure"
                name="staticPressure"
                value={formData.staticPressure}
                onChange={handleChange}
                placeholder="Optional"
              />
              <select
                name="pressureUnit"
                value={formData.pressureUnit}
                onChange={handleChange}
                className="select-unit"
              >
                <option value="mmWG">mmWG</option>
                <option value="Pa">Pa</option>
                <option value="mbar">mbar</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="motorPower">Motor Rating</label>
            <div className="input-group">
              <input
                type="text"
                id="motorPower"
                name="motorPower"
                value={formData.motorPower}
                onChange={handleChange}
                placeholder="Optional"
              />
              <select
                name="powerUnit"
                value={formData.powerUnit}
                onChange={handleChange}
                className="select-unit"
              >
                <option value="HP">HP</option>
                <option value="kW">kW</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="additionalDetails">Operating Conditions & Details</label>
            <textarea
              id="additionalDetails"
              name="additionalDetails"
              rows="4"
              value={formData.additionalDetails}
              onChange={handleChange}
              placeholder="Provide context like working temperature, corrosive gases, acid exposures, continuous load profile, noise limitations, or dimensional limits..."
            ></textarea>
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="spinner-wrap">
              <span className="spinner"></span> Engineering calculations...
            </span>
          ) : (
            'Submit RFQ / Calculate Price'
          )}
        </button>
      </form>
    </div>
  );
}

export default QuoteForm;
