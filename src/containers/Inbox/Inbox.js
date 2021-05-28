import React, { PureComponent } from "react";
import EmailCards from "../../components/EmailCrads/EmailCards";

class Inbox extends PureComponent {
  render() {
    const { emails } = this.props;
    return (
      <div className='app-body'>
        <EmailCards emails={emails} />
      </div>
    );
  }
}

export default Inbox;
