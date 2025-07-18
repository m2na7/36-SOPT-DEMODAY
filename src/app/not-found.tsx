export const metadata = {
  title: '페이지를 찾을 수 없습니다',
  description: '요청하신 페이지가 존재하지 않습니다.',
};

export default function NotFound() {
  return (
    <div>
      <h1>404 - 페이지를 찾을 수 없습니다.</h1>
      <p>주소가 잘못되었거나, 삭제된 페이지입니다.</p>
    </div>
  );
}
