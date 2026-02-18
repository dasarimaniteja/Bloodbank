import { useState } from 'react';
import './ChatBot.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="chatbot-container">
      <div className="chatbot-toggle" onClick={() => setOpen(!open)}>
        <div className="chatbot-header-text">
          <div className="chatbot-title">AuraHP Assistant</div>
          <div className="chatbot-subtitle">We typically reply within a few minutes</div>
        </div>
        <div className="chatbot-arrow">{open ? <ChevronDown size={20} /> : <ChevronUp size= {20} />}</div>
      </div>

      {open && (
        <div className="chatbot-popup">
          <div className="chatbot-messages">
            <div className="chatbot-message bot-message">How can I help you today?</div>
          </div>
          <div className="chatbot-input-section">
            <input
              type="text"
              placeholder="Type your message..."
              className="chatbot-input"
            />
            <button className="chatbot-send-btn">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
