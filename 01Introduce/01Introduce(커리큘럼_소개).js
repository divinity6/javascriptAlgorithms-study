/**
 * 프로그람 설명문서 주석
 * 2022.07.31
 *
 *
 *           ===== 강의 소개 =====
 *
 *      ====================== 첫 번째 섹션 ==========================
 *
 *      @BIG_O_NOTATION
 *
 *      - 코드의 성능, 효율성을 설명하는 방식( 항상 사용 )
 *
 *      @ANALYZING_PERFORMANCE_OF_ARRAY_AND_OBJECTS
 *
 *      - 어레이와 객체 성능 분석
 *
 *      - big O 표기법에서 배운 것을 데이터 구조의 빌드에 적용
 *
 *      @PROBLEM_SOLVING_APPROACH
 *
 *      - 문제해결 접근 방식
 *
 *      --> 어려운 문제를 만났을 경우 해결하는 방법
 *
 *      --> 어려운 문제를 접근하는 방법
 *
 *      --> 문제를 생각하고, 접근할 수 있는 체계를 설정하는 내용
 *
 *      @PROBLEM_SOLVING_PATTERN?
 *
 *      - 문제해결 패턴
 *
 *      --> 패턴은 실제 특정 종류의 원형을 만나는데 여기에서는 코드이다
 *
 *      ----> 나누어 정리하기, 슬라이딩 창 빈도, 카운터 패턴등
 *            이름이 각각 다르다
 *            ( 모두 다른패턴이다 )
 *
 *      ----> 구체적인 패턴
 *
 *      @RECURSION
 *
 *      - 재귀
 *
 *      --> 대부분의 알고리즘에는 두가지 도전 섹션이 있다
 *
 *      ----> 직접 재귀 문제, 더 어려운 재귀 문제
 *
 *      @SEARCHING_ALGORITHMS
 *
 *      - 재귀 탐색
 *
 *      --> 이진 탐색
 *
 *      @BUBBLE_SORT
 *
 *      - 정렬 알고리즘
 *
 *      --> 최소 여섯가지의 정렬 알고리즘이 있다
 *
 *      ----> 애네들한테는 이상한 이름들이 있는데 거품 알고리즘이 가장 쉽다
 *
 *      @SELECTION_SORT
 *
 *      - 선택 정렬
 *
 *      @INSERTION_SORT
 *
 *      - 삽입 정렬
 *
 *      --> 위의 3개 알고리즘은 기본 정렬 알고리즘이다
 *
 *      @MARGE_SORT
 *
 *      - 병합 정렬
 *
 *      @QUICK_SORT
 *
 *      - 퀵 정렬
 *
 *      --> 이 모두엔 재귀가 포함되고, big 0 notation 이 포함된다
 *
 *      ----> 따라서, 선행 조건 텍스트 강의에 집중 해야한다.
 *
 *      @RADIX_SORT
 *
 *      - 기수 정렬
 *
 *      - 이것은 매우 드문 정렬이다
 *
 *      --> 특별한 상황에서 매우 빠르다
 *
 *
 *     ====================== 두 번째 섹션 ==========================
 *
 *     @INTRO_TO_DATA_STRUCTURES
 *
 *     - 데이터 구조
 *
 *     - 이 지점까지는 일종의 디딤돌이다
 *
 *     --> 재귀, 큰 주석, 문제 해결 방식, 알고리즘 탐색, 정렬 알고리즘 등등
 *
 *     --> 그 이후 데이터 구조로 들어간다
 *
 *     ----> 최고의 데이터 구조가 무엇인가 라는 질문의 답을 찾는 내용
 *
 *     ----> 이것의 답은 하나가 아니다
 *
 *     ----> 구조가 뛰어난 부분이나, 특정 구조가 뛰어난 부분을 다룬다
 *
 *     ----> ES2015 클래스 구문도 다룬다
 *
 *     @SINGLY_LINKED_LISTS
 *
 *     - 단일 링크드 리스트
 *
 *     @DOUBLE_LINKED_LISTS
 *
 *     - 더블 링크드 리스트
 *
 *     @STACKS_QUEUES
 *
 *     - 스택, 큐 구조
 *
 *     @BINARY_SEARCH_TREES
 *
 *     - 이진 탐색 트리
 *
 *     @TREE_TRAVERSAL
 *
 *     - 트리 순회 전용 섹션
 *
 *     --> 너비, 우선 탐색 너비, 우선 탐색, 우선 탐색 후위 순위, 선순위 너비,
 *         우선 순회 를 다룬다
 *
 *     - 중요하면서 어렵다!!
 *
 *     - big o notation 과 재귀 같은 것을 호출하면 linked list 를 사용한다
 *
 *     --> 따라서, 많은것이 서로 연결된다
 *
 *     @BINARY_HEAPS
 *
 *     - 이진 힙
 *
 *     --> 트리와 연관성이 크다.( 매우 특별한 경우 )
 *
 *     --> 우선순위 큐를 빌드하는 내용을 다룬다
 *
 *     @HASH_TABLES
 *
 *     - 해시 테이블
 *
 *     --> javascript 의
 *         객체 작업 방식, 구현하는 방식 , key : value 데이터 구조를
 *         구현하는 방식을 이해할 수 있다
 *
 *     @GRAPHS
 *
 *     - 그래프
 *
 *     --> 전역 위치 지정인 GPS 를 모델링하는 방법
 *
 *     --> 매핑을 통해 찾는 방법을 알아내는 것
 *
 *     ----> 지도, 교통 데이터 그리고 서로다른 모든 변수를 어떻게 표시하여
 *           GPS 어플리케이션과 그와 같은 것을 만들 수 있는지등
 *
 *           그래프와 네트워크 라우팅에 관해 살펴본다
 *
 *     @GRAPH_TRAVERSAL
 *
 *     - 그래프 순회
 *
 *     --> 너비 우선, 깊이 우선등에 들어봤다면 어렵지 않을 것이다
 *
 *     @DIJKSTRAS_ALGORITHM
 *
 *     - 다익스트라 알고리즘
 *
 *     --> 그래프에서 두 노드, 두 정점 사이 최단 경로를 찾는 것과 관련이 있다
 *
 *     --> 예) 뉴욕에서 로스엔젤레스까지 가야한다면 어떻게 가는 것이 최단 거리일 것인가?
 *
 *     --> 교통 데이터는 무시하고, 단순한거리, 이를 계산하는 최상의 방법은?
 *
 *     ----> 이것이 이 강의의 절정부이다
 *
 *     ----> 빅 오 표기법, 재귀에 의존하기 때문이다
 *
 *           힙의 이진, 힙의 우선순위, 큐 , 스택, 그래프에 의존한다
 *
 *           앞에서 다룬 내용들이 이 마지막 섹션에 전부 다시나온다
 *
 *
 *     ========================================================
 *
 *     - 강의는 주로 chrome/sources 의 Snippets 을 이용해 코드를 작성한다
 */
title( '커리큘럼 소개' );
{
  debugger;
}