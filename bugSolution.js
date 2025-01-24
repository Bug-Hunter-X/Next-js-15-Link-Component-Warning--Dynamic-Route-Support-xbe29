```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/about');
  };

  return (
    <div>
      <button onClick={handleClick}>About Us</button>
    </div>
  );
}

export default MyComponent;
```