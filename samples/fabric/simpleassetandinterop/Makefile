assetexchange:
	cp -r ../../../core/network/fabric-interop-cc/libs/assetexchange .
build: assetexchange
	go build -v .
test: assetexchange
	cp -r ../../../core/network/fabric-interop-cc/contracts/interop/mocks .
	go test -v .
clean:
	rm -rf assetexchange
	rm -rf mocks
	rm simpleassetandinterop || true
