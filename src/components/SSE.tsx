import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Donation = {
  user: number;
  amount: number;
};

type Props = OwnProps;

const SSE: FunctionComponent<Props> = (props) => {
  const [donation, setDonation] = React.useState<Donation>({ user: 0, amount: 0 });

  React.useEffect(() => {
    const source = new EventSource(`http://localhost:4650/dashboard`);

    source.addEventListener('open', () => {
      console.log('SSE opened!');
    });

    source.addEventListener('message', (e) => {
      console.log(e.data);
      const data: Donation = JSON.parse(e.data);

      setDonation(data);
    });

    source.addEventListener('error', (e) => {
      console.error('Error: ',  e);
    });

    return () => {
      source.close();
    };
  }, []);

  return (
      <div>
        <h1>Donation status</h1>
        <hr/>
        <h3>Total amount: {donation.amount}</h3>
        <h3>Total user: {donation.user}</h3>
      </div>
  );
};

export default SSE;
