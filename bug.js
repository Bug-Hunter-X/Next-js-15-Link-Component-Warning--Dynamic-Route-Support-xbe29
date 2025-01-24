```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href='/about'>
        <a>About Us</a>
      </Link>
    </div>
  );
}

export default MyComponent;
```
This code produces a warning in Next.js 15: `Warning: Link does not support dynamic routing`