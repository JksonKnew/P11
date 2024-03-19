const API_URL = 'http://localhost:3001/api/v1';

export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Failed to login');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getUser = async (authToken) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`,
  };
  try {
    const response = await fetch(`${API_URL}/user/profile`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error('Failed to get user profile');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
