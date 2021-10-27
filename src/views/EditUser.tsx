import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { User } from '../types/User';
import { getUser, updateUser } from '../gateways/reqresUserGateway';
import { useHistory, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const EditUser: React.FC = () => {
  const [user, setUser] = useState<User>({
    avatar: '',
    first_name: '',
    id: 0,
    last_name: '',
  });
  const { userId } = useParams<{ userId?: string }>();
  const history = useHistory();

  useEffect(() => {
    const asyncWrapper = async () => {
      const user = await getUser(parseInt(userId));
      setUser(user);
    };
    asyncWrapper();
  }, []);

  const handleSubmit = async (values: User) => {
    await updateUser(values);
    history.push('/users');
  };

  const template = () => (
    <>
      <p>
        <img src={user.avatar} />
      </p>
      <p>
        {user.first_name} {user.last_name}
      </p>

      <Formik enableReinitialize initialValues={user} onSubmit={handleSubmit}>
        <Form>
          <p>
            <Field name="first_name" type="text" />
          </p>
          <p>
            <Field name="last_name" type="text" />
          </p>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <p>
        <Link to={`/users`}>Back</Link>
      </p>
    </>
  );

  return template();
};

export { EditUser };
